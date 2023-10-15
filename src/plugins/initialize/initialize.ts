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

    context.directory = (() => {
      const address = path.dirname(context.file.path);

      const name = path.basename(address!);

      return {
        name,
        path: address
      };
    })();

    context.file = (() => {
      const content = fs.readFileSync(context.file.path, 'utf8');

      const extension = path.extname(context.file.path);

      const name = path.basename(context.file.path, extension);

      return {
        content,
        extension,
        name,
        path: context.file.path
      };
    })();

    context.settings = (() => {
      const dock = /<body[^>]*\sdock(?:\s|>)/i.test(context.file.content);

      const isolate = /<body[^>]*\sisolate(?:\s|>)/i.test(context.file.content);

      const rtl = /<body[^>]*\srtl(?:\s|>)/i.test(context.file.content);

      if (!dock && !isolate && !rtl) return;

      return {
        dock,
        isolate,
        rtl
      };
    })();

    context.style = await (async () => {
      const [content] = extract('style', context.file.content);

      if (!content) return;

      const formatted = await format(content, { parser: 'css' });

      return {
        content: formatted
      };
    })();

    context.config = (() => {
      const [one, two] = extract('script', context.file.content);

      const content = two ? one : undefined;

      if (!content) return;

      const ast = parse(content, { sourceType: 'module' });

      return {
        ast
      };
    })();

    context.template = (() => {
      const [content] = extract('body', context.file.content, ['script', 'style']);

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

      return {
        ast,
        wrapped: element == fragment
      };
    })();

    context.script = (() => {
      const [one, two] = extract('script', context.file.content);

      const content = two || one;

      if (!content) return;

      const ast = parse(content, { sourceType: 'module' });

      return {
        ast
      };
    })();

    context.dependencies = (() => {
      if (!context.script) return [];

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

      if (context.config) {
        traverse(context.config.ast, { ImportDeclaration });
      }

      if (context.script) {
        traverse(context.script.ast, { ImportDeclaration });
      }

      return dependencies.sort();
    })();

    context.title = options.getTitle(context) || '';
  };

  return { name, run };
};
