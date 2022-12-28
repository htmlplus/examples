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
  findClassDeclaration,
  format,
  formatFile,
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

export const vue = (options) => {
  const name = 'vue';
  const run = (context) => {
    const cwd = __dirname(import.meta.url);

    const destination = options?.destination?.(context) || path.join(context.directoryPath, name);

    const patterns = ['templates/**/*.*'];

    const title = getTitle(context);

    fs.rmSync(destination, { recursive: true, force: true });

    const visitors = {
      script: {
        ClassDeclaration(path) {
          const { body } = path.node;

          path.traverse(visitors.script);

          if (!body.body.length) return path.remove();

          path.replaceWithMultiple(body.body);
        },
        ClassMethod: {
          enter(path) {
            const { body, key, params } = path.node;
            if (key.name == context.classRender.key.name) return;
            path.replaceWith(t.functionDeclaration(key, params, body));
          },
          exit(path) {
            const { key } = path.node;
            if (key.name != context.classRender.key.name) return;
            path.remove();
          }
        },
        ClassProperty(path) {
          const { key, value } = path.node;

          const isProperty = context.classProperties.some((property) => property.key.name == key.name);

          if (isProperty) {
            // TODO
          }

          const isState = context.classStates.some((state) => state.key.name == key.name);

          if (isState) {
            path.replaceWith(
              t.variableDeclaration('const', [
                t.variableDeclarator(key, t.callExpression(t.identifier('ref'), value ? [value] : []))
              ])
            );
          }

          // TODO
          // if (!isProperty && !isState) path.remove();
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
        MemberExpression(path) {
          const { object, property } = path.node;

          if (object.type != 'ThisExpression') return;

          const isState = context.classStates.some((state) => state.key.name == property.name);

          if (isState) {
            path.replaceWith(t.memberExpression(property, t.identifier('value')));
          } else {
            path.replaceWith(property);
          }
        },
        Program(path) {
          JSON.parse(JSON.stringify(context.customElementNames))
            .reverse()
            .forEach((name) => addDependency(path, options?.componentRefrence(name)));

          if (context.classStates.length) addDependency(path, 'vue', 'ref', 'ref');
        }
      },
      template: {
        ClassDeclaration(path) {
          path.traverse(visitors.template);
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

            if (isEvent(name.name)) {
              name.name = options?.eventNameConvertor?.(name.name) || name.name;
            }

            if (value.type != 'JSXExpressionContainer') return;

            let newValue;

            if (name.name == 'ref') {
              // TODO
            } else if (IGNORES.includes(value.expression.type)) {
              newValue = name.name;
            } else {
              // TODO
              newValue = print(value.expression.body || value.expression).replace('event', '$event');
            }

            path.node.value = t.stringLiteral(newValue);

            if (!name.name.match(/@|:/)) name.name = `:${name.name}`;
          }
        },
        JSXExpressionContainer: {
          exit(path) {
            const { expression } = path.node;

            if (path.parentPath.type == 'JSXAttribute') return;

            if (expression.type == 'LogicalExpression' && expression.right.type == 'JSXElement') {
              expression.right.openingElement.attributes.push(
                t.jsxAttribute(t.jsxIdentifier('v-if'), t.stringLiteral(print(expression.left)))
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
      const content = getSnippet('config', context);

      if (!content) patterns.push('!templates/src/config.js.*');

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
      const content = getSnippet('style', context);

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

    formatFile(path.join(destination, 'src', 'App.vue'), { parser: 'vue' });

    setOutput(name, context, {
      config,
      script,
      style,
      template
    });
  };
  return { name, run };
};
