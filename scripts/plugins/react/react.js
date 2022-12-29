import t from '@babel/types';
import {
  __dirname,
  addDependency,
  print,
  removeUnusedImport,
  renderTemplate,
  visitor
} from '@htmlplus/element/compiler/utils/index.js';
import { camelCase, paramCase, pascalCase } from 'change-case';
import fs from 'fs';
import path from 'path';

import {
  format,
  formatFile,
  getSnippet,
  getTitle,
  isEvent,
  removeThis,
  renameCustomElementName,
  renameJSXAttributeName,
  setOutput,
  styleToObject
} from '../../utils.js';

export const react = (options) => {
  const name = 'react';
  const run = (context) => {
    const cwd = __dirname(import.meta.url);

    const destination = options?.destination?.(context) || path.join(context.directoryPath, name);

    const patterns = ['templates/**/*.*'];

    const title = getTitle(context);

    fs.rmSync(destination, { recursive: true, force: true });

    const visitors = {
      script: {
        AssignmentExpression(path) {
          const { left, right } = path.node;
          if (left?.object?.type === 'ThisExpression') {
            const setter = 'set' + pascalCase(left.property.name);
            path.replaceWith(t.callExpression(t.identifier(setter), [right]));
          }
        },
        ClassDeclaration(path) {
          path.traverse(visitors.script);

          const body = [
            t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier(context.className),
                t.arrowFunctionExpression([], t.blockStatement(path.node.body.body))
              )
            ]),
            t.exportDefaultDeclaration(t.identifier(context.className))
          ];

          path.replaceWithMultiple(body);
        },
        ClassMethod(path) {
          const { body, key, params } = path.node;

          if (key.name != context.classRender.key.name) {
            path.replaceWith(
              t.variableDeclaration('const', [t.variableDeclarator(key, t.arrowFunctionExpression(params, body))])
            );
            return;
          }

          path.replaceWithMultiple(body.body);
        },
        ClassProperty(path) {
          const { decorators, key, value } = path.node;

          if (decorators?.[0]?.expression?.callee?.name === 'State') {
            path.replaceWith(
              t.variableDeclaration('const', [
                t.variableDeclarator(
                  t.arrayPattern([key, t.identifier(`set${pascalCase(key.name)}`)]),
                  t.callExpression(t.identifier('useState'), value ? [value] : [])
                )
              ])
            );
          } else {
            path.replaceWith(t.variableDeclaration('let', [t.variableDeclarator(key, value)]));
          }
        },
        Decorator(path) {
          path.remove();
        },
        Program(path) {
          context.customElementNames.forEach((name) => {
            const newName = options?.componentNameConvertor?.(name) || name;

            const [root] = newName.split('.');

            addDependency(path, options?.componentRefrence?.(name), root, root);
          });

          if (context.classStates.length) addDependency(path, 'react', 'useState', 'useState');
        }
      }
    };

    const config = (() => {
      const content = getSnippet('config', context)?.content;

      if (!content) patterns.push('!templates/src/config.js.*');

      return content;
    })();

    const script = (() => {
      const ast = t.cloneNode(context.fileAST, true);

      visitor(ast, visitors.script);

      styleToObject(ast);

      removeThis(ast);

      removeUnusedImport(ast);

      renameCustomElementName(ast, (name) => {
        return options?.componentNameConvertor?.(name);
      });

      renameJSXAttributeName(ast, (name) => {
        if (name == 'class') return 'className';

        if (isEvent(name)) return options?.eventNameConvertor?.(name);

        // TODO
        if (/data[A-Z]/g.test(camelCase(name))) return paramCase(name);

        return camelCase(name);
      });

      const content = print(ast);

      if (!content) return;

      return format(content, { parser: 'babel' });
    })();

    const style = (() => {
      const content = getSnippet('style', context)?.content;

      if (!content) return;

      return format(content, { parser: 'css' });
    })();

    if (!style) patterns.push('!templates/src/index.css.*');

    const model = {
      config,
      script,
      style,
      title
    };

    renderTemplate(patterns, destination, { cwd })(model);

    formatFile(path.join(destination, 'src', 'App.js'), { parser: 'babel' });

    setOutput(name, context, {
      config,
      script,
      style
    });
  };
  return { name, run };
};
