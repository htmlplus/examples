import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import fs from 'node:fs';
import path from 'node:path';

import { IContext, IContextDependency, IPlugin } from '@/types';
import { format } from '@/utils';

export interface IInitializeOptions {
  dependencyResolver: (source: string) => IContextDependency;
  getTitle: (context: IContext) => string;
}

export const initialize: IPlugin<IInitializeOptions> = (options) => {
  const name = 'initialize';

  const extract = (tag: string, input: string, ignores?: string[]) => {
    const inner = (tag: string) => {
      return new RegExp(`<${tag}[^>]*>|</${tag}>`, 'gi');
    };

    const outer = (tag: string) => {
      return new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'gi');
    };

    const matches = input.match(outer(tag)) || [];

    return matches.map((match) => {
      let content = match.replace(inner(tag), '');

      ignores?.forEach((ignore) => {
        content = content.replace(outer(ignore), '');
      });

      return content.trim();
    });
  };

  const run = async (context: IContext) => {
    context.output = {};

    context.directoryPath = path.dirname(context.filePath);

    context.directoryName = path.basename(context.directoryPath);

    context.fileContent = fs.readFileSync(context.filePath, 'utf8');

    context.fileExtension = path.extname(context.filePath);

    context.fileName = path.basename(context.filePath, context.fileExtension);

    context.settingsDock = /<body[^>]*\sdock(?:\s|>)/i.test(context.fileContent);

    context.settingsIsolate = /<body[^>]*\sisolate(?:\s|>)/i.test(context.fileContent);

    context.settingsRTL = /<body[^>]*\srtl(?:\s|>)/i.test(context.fileContent);

    await (async () => {
      const [content] = extract('style', context.fileContent);

      if (!content) return;

      context.styleContent = await format(content, { parser: 'css' });
    })();

    (() => {
      const [one, two] = extract('script', context.fileContent);

      const content = two ? one : undefined;

      if (!content) return;

      context.configAST = parse(content, { sourceType: 'module' });
    })();

    (() => {
      const [content] = extract('body', context.fileContent, ['script', 'style']);

      if (!content) return;

      const input = `<>${content}</>`;

      const ast = parse(input, {
        sourceType: 'module',
        plugins: ['jsx']
      });

      const fragment = (ast.program.body.at(0) as any).expression;

      const children = fragment.children.filter((child: any) => {
        return child.type != 'JSXText' || child.value.trim();
      });

      const element = children.length == 1 ? children.at(0) : fragment;

      ast.program.body = [element];

      context.templateAST = ast;

      context.templateWrapped = element == fragment;
    })();

    (() => {
      const [one, two] = extract('script', context.fileContent);

      const content = two || one;

      if (!content) return;

      context.scriptAST = parse(content, { sourceType: 'module' });
    })();

    context.dependencies = (() => {
      if (!context.scriptAST) return [];

      const dependencies: IContextDependency[] = [];

      const ImportDeclaration = (path: any) => {
        const defaults = {
          name: path.node.source.value,
          version: 'latest'
        };

        const dependency = options.dependencyResolver(path.node.source.value) || defaults;

        const has = dependencies.some((item) => item.name == dependency.name);

        if (has) return;

        dependencies.push(dependency);
      };

      if (context.configAST) {
        traverse(context.configAST, { ImportDeclaration });
      }

      if (context.scriptAST) {
        traverse(context.scriptAST, { ImportDeclaration });
      }

      return dependencies.sort();
    })();

    context.title = options.getTitle(context) || '';
  };

  return { name, run };
};
