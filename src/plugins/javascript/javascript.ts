import generator from '@babel/generator';
import * as t from '@babel/types';
import merge from 'deepmerge';

import { IContext, IPlugin } from '@/types';
import { IImportResolverFunction, Resolver, format, importResolver, write } from '@/utils';

export interface IJavascriptOptions {
  destination: (context: IContext) => string;
  importResolver: IImportResolverFunction;
}

export const javascript: IPlugin<IJavascriptOptions> = (options) => {
  const name = 'javascript';

  const run = async (context: IContext) => {
    const destination = options.destination(context);

    const resolver = new Resolver(context, {
      script: {
        arrowFunctionExpression: {
          constant() { }
        },
        constant() { },
        element: {
          method: {
            addEventListener: {
              arrowFunctionExpression: {
                blockStatement() { },
                callExpression() { }
              },
              callExpression() { },
              functionExpression() { },
              identifier() { }
            }
          },
          property: {
            constant() { },
            state: {
              define() { },
              getter() { },
              setter() { }
            }
          },
          reference() { }
        },
        final() { },
        functionDeclaration() { },
        functionExpression: {
          constant() { }
        },
        unresolved() { },
        variable: {
          define() { },
          getter() { },
          setter() { }
        }
      },
      template: {
        element: {
          attribute: {
            class() { },
            default() { },
            id() { },
            style() { }
          },
          default() { }
        },
        fragment() { }
      }
    });

    resolver.execute();

    const config = await (async () => {
      if (!context.config) return;

      importResolver(resolver.config, options.importResolver);

      const { code } = generator(resolver.config);

      const formatted = await format(code, { parser: 'babel' });

      return formatted;
    })();

    const script = await (async () => {
      if (!context.script) return;

      importResolver(resolver.script, options.importResolver);

      const { code } = generator(resolver.script);

      const formatted = await format(code, { parser: 'babel' });

      return formatted;
    })();

    const template = await (async () => {
      if (!context.template) return;

      const { code } = generator(resolver.template, {});

      const cleaned = code.replace(/<>|<\/>/g, '');

      const formatted = await format(cleaned, { parser: 'html' });

      return formatted;
    })();

    const model = merge(context, {
      config: config && {
        content: config
      },
      script: script && {
        content: script
      },
      template: template && {
        content: template
      }
    });

    const patterns = ['templates/**/*.*'];

    if (!context.config) {
      patterns.push('!templates/config.js.*');
    }

    if (!context.style) {
      patterns.push('!templates/style.css.*');
    }

    await write(__dirname, patterns, destination)(model);

    context.output[name] = {
      config,
      script,
      style: context.style?.content,
      template
    };
  };

  return { name, run };
};
