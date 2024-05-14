import generator from '@babel/generator';
import * as t from '@babel/types';
import { camelCase, pascalCase } from 'change-case';
import merge from 'deepmerge';

import { IContext, IPlugin } from '@/types';
import {
  IImportResolverFunction,
  Resolver,
  addAttribute,
  addDependency,
  addToArray,
  format,
  getAttribute,
  importResolver,
  isCustomElement,
  write
} from '@/utils';

export interface ISvelteOptions {
  destination: (context: IContext) => string;
  eventResolver: (name: string) => string;
  importResolver: IImportResolverFunction;
  isStringAttribute: (element: string, name: string) => boolean;
}

export const svelte: IPlugin<ISvelteOptions> = (options) => {
  const name = 'svelte';

  const run = async (context: IContext) => {
    const destination = options.destination(context);

    const resolver = new Resolver(context, {
      script: {
        arrowFunctionExpression: {
          constant(parameters) {
            this.resolve(parameters.pattern.node);
          }
        },
        constant(parameters) {
          this.resolve(parameters.pattern.node);
        },
        element: {
          method: {
            addEventListener: {
              arrowFunctionExpression: {
                blockStatement(parameters) {
                  this.options.script.element.method.addEventListener.functionExpression.bind(this)(
                    parameters as any
                  );
                },
                callExpression(parameters) {
                  this.options.script.element.method.addEventListener.callExpression.bind(this)(
                    parameters as any
                  );
                }
              },
              callExpression(parameters) {
                if (!parameters.isRoot) return;

                const event = options.eventResolver(parameters.event);

                addAttribute(
                  parameters.element,
                  'on:' + event,
                  t.stringLiteral('{' + generator(parameters.handler).code + '}')
                );

                parameters.wrapper.remove();
              },
              functionExpression(parameters) {
                if (!parameters.isRoot) return;

                const event = options.eventResolver(parameters.event);

                const token = this.addToken('on' + pascalCase(event), event, true);

                addAttribute(
                  parameters.element,
                  'on:' + event,
                  t.stringLiteral('{' + token.value + '}')
                );

                const node = t.functionDeclaration(
                  t.identifier(token.value),
                  parameters.handler.params,
                  parameters.handler.body
                );

                this.resolve(node);

                parameters.wrapper.replaceWith(node);
              },
              identifier(parameters) {
                if (!parameters.isRoot) return;

                const event = options.eventResolver(parameters.event);

                addAttribute(
                  parameters.element,
                  'on:' + event,
                  t.stringLiteral('{' + parameters.handler.name + '}')
                );

                parameters.wrapper.remove();
              }
            }
          },
          property: {
            constant(parameters) {
              const token = this.addToken(
                parameters.property.name,
                parameters.id + parameters.property.name
              );

              addAttribute(
                parameters.element,
                parameters.property.name,
                t.stringLiteral('{' + token.value + '}')
              );

              const node = t.variableDeclaration('const', [
                t.variableDeclarator(t.identifier(token.value), parameters.initializer)
              ]);

              this.resolve(node);

              addToArray(this.script.program.body, node, (input: any) => {
                return input.declarations?.some((declaration: any) => {
                  return declaration.id.name == token.value;
                });
              });

              parameters.pattern.remove();
            },
            state: {
              define(parameters) {
                const token = this.addToken(
                  parameters.property.name,
                  parameters.id + parameters.property.name
                );

                if (!token.new) return;

                addAttribute(
                  parameters.element,
                  parameters.property.name,
                  t.stringLiteral('{' + token.value + '}')
                );

                const node = t.variableDeclaration('let', [
                  t.variableDeclarator(t.identifier(token.value), parameters.initializer)
                ]);

                this.resolve(node);

                this.script.program.body.unshift(node);
              },
              getter(parameters) {
                if (!t.isIdentifier(parameters.pattern.node.property)) return;

                const token = this.getToken(parameters.id + parameters.pattern.node.property.name);

                if (!token) return;

                parameters.pattern.replaceWith(t.identifier(token.value));
              },
              setter(parameters) {
                const left = parameters.pattern.node.left as any;

                const name = left.property.name;

                const token = this.addToken(name, parameters.id + name);

                parameters.pattern.node.left = t.identifier(token.value);

                this.resolve(parameters.wrapper.node);
              }
            }
          },
          reference(parameters) {
            const token = this.addToken(camelCase(parameters.id + 'Ref'), parameters.id);

            parameters.pattern.node.name = token.value;

            if (!token.new) return;

            addAttribute(parameters.element, 'bind:this', t.stringLiteral('{' + token.value + '}'));

            const node = t.variableDeclaration('let', [
              t.variableDeclarator(t.identifier(token.value))
            ]);

            this.resolve(node);

            addToArray(this.script.program.body, node, (input: any) => {
              return input.declarations?.some((declaration: any) => {
                return declaration.id.name == token.value;
              });
            });
          }
        },
        final(parameters) {},
        functionDeclaration(parameters) {
          this.resolve(parameters.pattern.node);
        },
        functionExpression: {
          constant(parameters) {
            this.resolve(parameters.pattern.node);
          }
        },
        unresolved(parameters) {
          if (!parameters.isRoot) return;

          if (t.isImportDeclaration(parameters.pattern.node)) return;

          addDependency(this.script, 'svelte', 'onMount', 'onMount');

          let node = this.script.program.body.find(
            (node: any) => node.callee?.name == 'onMount'
          ) as any;

          if (!node) {
            node = t.callExpression(t.identifier('onMount'), [
              t.arrowFunctionExpression([], t.blockStatement([]))
            ]);

            parameters.pattern.insertAfter(node);

            this.resolve(node);
          }

          const cloned = t.cloneNode(parameters.pattern.node, true);

          this.resolve(cloned);

          node.arguments[0].body.body.push(cloned);

          parameters.pattern.remove();
        },
        variable: {
          define(parameters) {
            this.resolve(parameters.pattern.node);
          },
          getter() {},
          setter(parameters) {
            this.resolve(parameters.wrapper.node);
          }
        }
      },
      template: {
        element: {
          attribute: {
            class() {},
            default(parameters) {
              if (!isCustomElement(parameters.element)) return;

              const value = getAttribute(parameters.element, parameters.name.name);

              if (!value) return;

              if (t.isStringLiteral(value)) return;

              if (
                t.isJSXIdentifier(parameters.element.openingElement.name) &&
                options.isStringAttribute(
                  parameters.element.openingElement.name.name,
                  parameters.name.name
                )
              )
                return;

              parameters.pattern.node.value = value;
            },
            id(parameters) {
              parameters.pattern.remove();
            },
            style() {}
          },
          default() {}
        },
        fragment() {}
      }
    });

    resolver.execute();

    const config = await (async () => {
      if (!context.configAST) return;

      importResolver(resolver.config, options.importResolver);

      const { code } = generator(resolver.config);

      const formatted = await format(code, { parser: 'babel' });

      return formatted;
    })();

    const script = await (async () => {
      if (!context.scriptAST) return;

      importResolver(resolver.script, options.importResolver);

      const { code } = generator(resolver.script);

      const formatted = await format(code, { parser: 'babel' });

      return formatted;
    })();

    const template = await (async () => {
      if (!context.templateAST) return;

      const { code } = generator(resolver.template, {});

      const cleaned = code.replace(/<>|<\/>/g, '');

      const formatted = await format(cleaned, { parser: 'svelte' });

      return formatted;
    })();

    const model = merge(context, {
      configContent: config,
      scriptContent: script,
      templateContent: template
    });

    const patterns = ['templates/**/*.*'];

    if (!context.configAST) {
      patterns.push('!templates/src/config.js.*');
    }

    await write(__dirname, patterns, destination)(model);

    context.output[name] = {
      config,
      script,
      style: context.styleContent,
      template
    };
  };

  return { name, run };
};
