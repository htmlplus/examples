import t from '@babel/types';
import {
  __dirname,
  addDependency,
  print,
  removeUnusedImport,
  renderTemplate,
  visitor
} from '@htmlplus/element/compiler/utils/index.js';
import fs from 'fs';
import path from 'path';

import {
  format,
  getSnippet,
  getTitle,
  isEvent,
  removeThis,
  renameCustomElementName,
  setOutput,
  toFile
} from '../../utils.js';

const IGNORES = [
  'ArrayExpression',
  // 'ArrowFunctionExpression',
  // 'CallExpression',
  'JSXElement',
  'JSXFragment',
  'ObjectExpression'
];

export const angular = (options) => {
  const name = 'angular';
  const run = (context) => {
    const cwd = __dirname(import.meta.url);

    const destination = options?.destination?.(context) || path.join(context.directoryPath, name);

    const patterns = ['templates/**/*.*'];

    const title = getTitle(context);

    fs.rmSync(destination, { recursive: true, force: true });

    const visitors = {
      script: {
        ClassDeclaration: {
          enter(path) {
            const { id } = path.node;
            if (context.class.id.name == id.name) return;
            path.skip();
          },
          exit(path) {
            const { id } = path.node;

            id.name = 'AppComponent';

            path.node.decorators.push(
              t.decorator(
                t.callExpression(t.identifier('Component'), [
                  t.objectExpression([
                    t.objectProperty(t.identifier('selector'), t.stringLiteral('app-root')),
                    t.objectProperty(t.identifier('templateUrl'), t.stringLiteral('./app.component.html')),
                    t.objectProperty(
                      t.identifier('styleUrls'),
                      t.arrayExpression([t.stringLiteral('./app.component.css')])
                    )
                  ])
                ])
              )
            );

            path.replaceWith(t.exportNamedDeclaration(path.node));

            path.skip();
          }
        },
        ClassMethod(path) {
          const { key } = path.node;
          if (key.name != context.classRender.key.name) return;
          path.remove();
        },
        Decorator(path) {
          path.remove();
        },
        JSXAttribute(path) {
          const { name, value } = path.node;

          if (!value) return;

          if (value.type != 'JSXExpressionContainer') return;

          const classDeclaration = findClassDeclaration(path);

          if (name.name == 'ref') {
            // TODO
          } else if (IGNORES.includes(value.expression.type)) {
            const property = t.classProperty(t.identifier(name.name), value.expression);
            classDeclaration.node.body.body.push(property);
          }
        },
        Program(path) {
          JSON.parse(JSON.stringify(context.customElementNames))
            .reverse()
            .forEach((name) => addDependency(path, options?.componentRefrence(name)));

          addDependency(path, '@angular/core', 'Component', 'Component');
        }
      },
      template: {
        ClassDeclaration(path) {
          path.replaceWithMultiple(path.node.body.body);
        },
        ClassMethod(path) {
          const { body } = path.node;

          const statement = body.body.find((element) => element.type === 'ReturnStatement');

          const element = statement.argument;

          const children = [];

          if (element.type == 'JSXFragment') {
            for (const child of element.children) {
              if (child.type == 'JSXText') continue;
              children.push(child);
            }
          } else {
            children.push(element);
          }

          path.replaceWithMultiple(children);
        },
        JSXAttribute: {
          exit(path) {
            const { name, value } = path.node;

            if (!value) return;

            const event = isEvent(name.name);

            if (event) {
              name.name = options?.eventNameConvertor?.(name.name) || name.name;
            }

            if (value.type != 'JSXExpressionContainer') return;

            let newValue;

            if (name.name == 'ref') {
              // TODO
              // path.replaceWith(t.jsxAttribute(t.jsxIdentifier('#ref'), null));
              return;
            } else if (IGNORES.includes(value.expression.type)) {
              newValue = name.name;
            } else {
              // TODO
              newValue = print(value.expression.body || value.expression).replace('event', '$event');
            }

            path.node.value = t.stringLiteral(newValue);

            if (!event) name.name = `[${name.name}]`;
          }
        },
        JSXExpressionContainer: {
          exit(path) {
            const { expression } = path.node;

            if (path.parentPath.type == 'JSXAttribute') return;

            if (expression.type == 'LogicalExpression' && expression.right.type == 'JSXElement') {
              expression.right.openingElement.attributes.push(
                t.jsxAttribute(t.jsxIdentifier('*ngIf'), t.stringLiteral(print(expression.left)))
              );

              path.replaceWith(expression.right);

              return;
            }

            path.replaceWithSourceString(`[[[${print(expression)}]]]`);
          }
        }
      }
    };

    const config = (() => {
      const content = getSnippet('config', context)?.content;

      if (!content) patterns.push('!templates/src/config.ts.*');

      return content;
    })();

    const script = (() => {
      const ast = t.cloneNode(context.fileAST, true);

      visitor(ast, visitors.script);

      removeUnusedImport(ast);

      const content = print(ast);

      if (!content) return;

      return format(content, { parser: 'babel' });
    })();

    const style = (() => {
      const content = getSnippet('style', context)?.content;

      if (!content) return;

      return format(content, { parser: 'css' });
    })();

    const template = (() => {
      const ast = t.cloneNode(toFile(context.classRender), true);

      removeThis(ast);

      visitor(ast, visitors.template);

      renameCustomElementName(ast, (name) => {
        return options?.componentNameConvertor?.(name);
      });

      const content = print(ast)
        ?.trim()
        ?.replace(/\[\[\[/g, '{{')
        ?.replace(/\]\]\]/g, '}}');

      if (!content) return;

      return format(content, { parser: 'html' });
    })();

    const model = {
      config,
      script,
      style,
      template,
      title
    };

    renderTemplate(patterns, destination, { cwd })(model);

    setOutput(name, context, {
      config,
      script,
      style,
      template
    });
  };
  return { name, run };
};
