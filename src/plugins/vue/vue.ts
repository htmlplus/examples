import generator from '@babel/generator';
import * as t from '@babel/types';
import { cloneNode } from '@babel/types';
import { camelCase, pascalCase } from 'change-case';
import merge from 'deepmerge';

import { IContext, IPlugin } from '@/types';
import {
  IImportResolverFunction,
  Resolver,
  addAttribute,
  addDependency,
  addToArray,
  flatArrowFunctionExpression,
  format,
  getAttribute,
  importResolver,
  isCustomElement,
  write
} from '@/utils';

export interface IVueOptions {
  destination: (context: IContext) => string;
  eventResolver: (name: string) => string;
  importResolver: IImportResolverFunction;
  isStringAttribute: (element: string, name: string) => boolean;
}

export const vue: IPlugin<IVueOptions> = (options) => {
  const name = 'vue';

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
                  if (!parameters.isRoot) return;

                  const event = options.eventResolver(parameters.event);

                  addAttribute(
                    parameters.element,
                    '@' + event,
                    t.stringLiteral(generator(flatArrowFunctionExpression(parameters.handler)).code)
                  );

                  parameters.wrapper.remove();
                }
              },
              callExpression(parameters) {
                if (!parameters.isRoot) return;

                const event = options.eventResolver(parameters.event);

                addAttribute(
                  parameters.element,
                  '@' + event,
                  t.stringLiteral(generator(parameters.handler).code)
                );

                parameters.wrapper.remove();
              },
              functionExpression(parameters) {
                if (!parameters.isRoot) return;

                const event = options.eventResolver(parameters.event);

                const token = this.addToken('on' + pascalCase(event), event, true);

                addAttribute(parameters.element, '@' + event, t.stringLiteral(token.value));

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
                  '@' + event,
                  t.stringLiteral(parameters.handler.name)
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
                ':' + parameters.property.name,
                t.stringLiteral(token.value)
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

                addDependency(this.script, 'vue', 'ref', 'ref');

                addAttribute(
                  parameters.element,
                  ':' + parameters.property.name,
                  t.stringLiteral(token.value)
                );

                const node = t.variableDeclaration('const', [
                  t.variableDeclarator(
                    t.identifier(token.value),
                    t.callExpression(t.identifier('ref'), [parameters.initializer])
                  )
                ]);

                this.resolve(node);

                this.script.program.body.unshift(node);
              },
              getter(parameters) {
                if (!t.isIdentifier(parameters.pattern.node.property)) return;

                const token = this.getToken(parameters.id + parameters.pattern.node.property.name);

                if (!token) return;

                parameters.pattern.node.object = t.identifier(token.value);

                parameters.pattern.node.property = t.identifier('value');
              },
              setter(parameters) {
                const left = parameters.pattern.node.left as any;

                const name = left.property.name;

                const token = this.addToken(name, parameters.id + name);

                left.object = t.identifier(token.value);

                left.property = t.identifier('value');

                this.resolve(parameters.wrapper.node);
              }
            }
          },
          reference(parameters) {
            const token = this.addToken(camelCase(parameters.id + 'Ref'), parameters.id);

            parameters.pattern.node.name = token.value;

            parameters.pattern.replaceWith(
              t.memberExpression(parameters.pattern.node, t.identifier('value'))
            );

            if (!token.new) return;

            addDependency(this.script, 'vue', 'ref', 'ref');

            addAttribute(parameters.element, 'ref', t.stringLiteral(token.value));

            const node = t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier(token.value),
                t.callExpression(t.identifier('ref'), [])
              )
            ]);

            this.resolve(node);

            addToArray(this.script.program.body, node, (input: any) => {
              return input.declarations?.some((declaration: any) => {
                return declaration.id.name == token.value;
              });
            });
          }
        },
        final(parameters) { },
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

          addDependency(this.script, 'vue', 'onMounted', 'onMounted');

          let node = this.script.program.body.find(
            (node: any) => node.callee?.name == 'onMounted'
          ) as any;

          if (!node) {
            node = t.callExpression(t.identifier('onMounted'), [
              t.arrowFunctionExpression([], t.blockStatement([]))
            ]);

            parameters.pattern.insertAfter(node);

            this.resolve(node);
          }

          const cloned = cloneNode(parameters.pattern.node, true);

          this.resolve(cloned);

          node.arguments[0].body.body.push(cloned);

          parameters.pattern.remove();
        },
        variable: {
          define(parameters) {
            if (!parameters.isRoot) return;

            parameters.pattern.node.declarations.forEach((declaration) => {
              const id = declaration.id as any;

              addDependency(this.script, 'vue', 'ref', 'ref');

              const token = this.addToken(id.name);

              const node = t.variableDeclaration('const', [
                t.variableDeclarator(
                  t.identifier(token.value),
                  t.callExpression(t.identifier('ref'), declaration.init ? [declaration.init] : [])
                )
              ]);

              this.resolve(node);

              parameters.pattern.insertAfter(node);
            });

            parameters.pattern.remove();
          },
          getter(parameters) {
            parameters.pattern.replaceWith(
              t.memberExpression(parameters.pattern.node, t.identifier('value'))
            );
          },
          setter(parameters) {
            parameters.pattern.node.left = t.memberExpression(
              parameters.pattern.node.left as any,
              t.identifier('value')
            );

            this.resolve(parameters.wrapper.node);
          }
        }
      },
      template: {
        element: {
          attribute: {
            class() { },
            default(parameters) {
              const has = parameters.element.openingElement.attributes.some(
                (attribute: any) => attribute.name.name == ':' + parameters.name.name
              );

              if (has) return parameters.pattern.remove();

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

              parameters.name.name = ':' + parameters.name.name;
            },
            id(parameters) {
              parameters.pattern.remove();
            },
            style() { }
          },
          default() { }
        },
        fragment(parameters) {
          parameters.pattern.replaceWith(
            t.jsxElement(
              t.jsxOpeningElement(t.jsxIdentifier('div'), []),
              t.jsxClosingElement(t.jsxIdentifier('div')),
              parameters.pattern.node.children
            )
          );
        }
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

      const formatted = await format(code, { parser: 'html' });

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
      patterns.push('!templates/src/config.js.*');
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
