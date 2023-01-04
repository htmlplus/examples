import t from '@babel/types';
import { __dirname, print, renderTemplate, visitor } from '@htmlplus/element/compiler/utils/index.js';
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
  setOutput,
  toFile
} from '../../utils.js';

export const javascript = (options) => {
  const name = 'javascript';
  const run = (context) => {
    const cwd = __dirname(import.meta.url);

    const destination = options?.destination?.(context) || path.join(context.directoryPath, name);

    const patterns = ['templates/**/*.*'];

    const title = getTitle(context);

    fs.rmSync(destination, { recursive: true, force: true });

    const visitors = {
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
        JSXAttribute(path) {
          const { name, value } = path.node;

          if (!value) return;

          if (isEvent(name.name)) path.remove();
        },
        JSXExpressionContainer(path) {
          let value;

          switch (path.node.expression.type) {
            case 'BinaryExpression':
              break;
            case 'BooleanLiteral':
            case 'NumericLiteral':
            case 'StringLiteral':
              value = path.node.expression.value;
            case 'MemberExpression':
              break;
            case 'TemplateLiteral':
              break;
          }

          const isAttribute = path.parent.type === 'JSXAttribute';

          if (isAttribute) {
            switch (typeof value) {
              case 'undefined':
                // TODO
                path.parentPath.remove();
                break;
              default:
                path.replaceWith(t.stringLiteral(`${value}`));
                break;
            }
          } else {
            switch (typeof value) {
              case 'undefined':
              case 'boolean':
                path.remove();
                break;
              default:
                path.replaceWithSourceString(value);
                break;
            }
          }
        }
      }
    };

    const config = (() => {
      // TODO
      return getSnippet('config', context)?.content?.replace('@htmlplus/core', 'https://unpkg.com/@htmlplus/core');
    })();

    const script = (() => {
      let content = getSnippet('javascript:script', context)?.content || '';

      if (content && context.customElementNames?.length) {
        content = '\n' + content;
      }

      let dependencies = '';

      context.customElementNames.forEach((name) => {
        dependencies += `import '${options?.componentRefrence(name)}';\n`;
      });

      return dependencies + content;

      // TODO

      // const ast = t.cloneNode(context.fileAST, true);

      // visitor(ast, visitors.script);

      // const content = print(ast);

      // if (!content) return;

      // return format(content, { parser: 'babel' });
    })();

    const style = (() => {
      const content = getSnippet('style', context)?.content;

      if (!content) return;

      return format(content, { parser: 'css' });
    })();

    const template = (() => {
      const dedicated = getSnippet('javascript:template', context)?.content;

      if (dedicated) return dedicated;

      const ast = t.cloneNode(toFile(context.classRender), true);

      visitor(ast, visitors.template);

      removeThis(ast);

      renameCustomElementName(ast, (name) => {
        return options?.componentNameConvertor?.(name);
      });

      const content = print(ast)?.trim();

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

    formatFile(path.join(destination, 'index.html'), { parser: 'html', embeddedLanguageFormatting: 'auto' });

    setOutput(name, context, {
      config,
      script,
      style,
      template
    });
  };
  return { name, run };
};
