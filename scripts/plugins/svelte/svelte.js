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

import { format, formatFile, getSnippet, getTitle, isEvent, toFile } from '../../utils.js';

const IGNORES = [
  'ArrayExpression',
  // 'ArrowFunctionExpression',
  // 'CallExpression',
  'JSXElement',
  'JSXFragment',
  'ObjectExpression'
];

export const svelte = (options) => {
  const name = 'svelte';
  const next = (context) => {
    const config = {
      cwd: __dirname(import.meta.url)
    };

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
        JSXAttribute(path) {
          const { name, value } = path.node;

          if (!value) return;

          if (value.type != 'JSXExpressionContainer') return;

          if (!IGNORES.includes(value.expression.type)) return;

          let parent = path.parentPath;

          while (parent && parent.node.type != 'ClassDeclaration') {
            parent = parent.parentPath;
          }

          const property = t.classProperty(t.identifier(name.name), value.expression);

          parent.node.body.body.push(property);
        },
        ClassProperty(path) {
          const { key, value } = path.node;

          const variable = t.variableDeclaration('let', [t.variableDeclarator(key, value)]);

          const isProperty = context.classProperties.some((property) => property.key.name == key.name);

          if (isProperty) {
            path.replaceWith(t.exportNamedDeclaration(variable));
          } else {
            path.replaceWith(variable);
          }
        },
        MemberExpression(path) {
          const { object, property } = path.node;

          if (object.type != 'ThisExpression') return;

          path.replaceWith(property);
        },
        Program(path) {
          JSON.parse(JSON.stringify(context.customElementNames))
            .reverse()
            .forEach((name) => addDependency(path, options?.componentRefrence(name)));
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

            if (IGNORES.includes(value.expression.type)) {
              newValue = name.name;
            } else {
              newValue = print(value.expression);
            }

            path.node.value = t.stringLiteral(`{${newValue}}`);
          }
        },
        JSXElement(path) {
          const { openingElement, closingElement } = path.node;

          const name = openingElement.name.name;

          if (!/-/g.test(name)) return;

          const newName = options?.componentNameConvertor?.(name) || name;

          openingElement.name.name = newName;

          if (!closingElement) return;

          closingElement.name.name = newName;
        },
        JSXExpressionContainer(path) {
          if (path.parentPath.type == 'JSXAttribute') return;
          path.replaceWithSourceString(`[[[${print(path.node.expression)}]]]`);
        },
        MemberExpression(path) {
          const { object, property } = path.node;

          if (object.type != 'ThisExpression') return;

          path.replaceWith(property);
        }
      }
    };

    const script = (() => {
      const ast = t.cloneNode(context.fileAST, true);

      visitor(ast, visitors.script);

      removeUnusedImport(ast);

      const content = print(ast);

      if (!content) return;

      return format(content, { parser: 'babel' });
    })();

    const style = (() => {
      const content = getSnippet(context, 'style')?.content;

      if (!content) return;

      return format(content, { parser: 'css' });
    })();

    const template = (() => {
      const ast = t.cloneNode(toFile(context.classRender), true);

      visitor(ast, visitors.template);

      const content = print(ast)
        ?.trim()
        ?.replace(/\[\[\[/g, '{')
        ?.replace(/\]\]\]/g, '}');

      if (!content) return;

      return format(content, { parser: 'html' });
    })();

    const model = {
      script,
      style,
      template,
      title
    };

    renderTemplate(patterns, destination, config)(model);

    formatFile(path.join(destination, 'App.svelte'), { parser: 'html' });

    return {
      script,
      style,
      template
    };
  };
  return {
    name,
    next
  };
};
