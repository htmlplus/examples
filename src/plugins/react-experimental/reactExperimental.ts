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
  getBody,
  importResolver,
  isCustomElement,
  replace,
  write
} from '@/utils';

export interface IReactExperimentalOptions {
  destination: (context: IContext) => string;
  eventResolver: (name: string) => string;
  importResolver: IImportResolverFunction;
  isStringAttribute: (element: string, name: string) => boolean;
}

export const reactExperimental: IPlugin<IReactExperimentalOptions> = (options) => {
  const name = 'react-experimental';

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
                  'on' + event,
                  t.jsxExpressionContainer(parameters.handler)
                );

                parameters.wrapper.remove();
              },
              functionExpression(parameters) {
                if (!parameters.isRoot) return;

                const event = options.eventResolver(parameters.event);

                const token = this.addToken('on' + pascalCase(event), event, true);

                addAttribute(
                  parameters.element,
                  'on' + event,
                  t.jsxExpressionContainer(t.identifier(token.value))
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
                  'on' + event,
                  t.jsxExpressionContainer(parameters.handler)
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
                t.jsxExpressionContainer(t.identifier(token.value))
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
                const getter = this.addToken(
                  parameters.property.name,
                  parameters.id + parameters.property.name
                );

                const setter = this.addToken(
                  'set' + pascalCase(parameters.property.name),
                  'setter' + parameters.id + parameters.property.name
                );

                if (!getter.new) return;

                addDependency(this.script, 'react', 'useState', 'useState');

                addAttribute(
                  parameters.element,
                  parameters.property.name,
                  t.jsxExpressionContainer(t.identifier(getter.value))
                );

                const node = t.variableDeclaration('const', [
                  t.variableDeclarator(
                    t.arrayPattern([t.identifier(getter.value), t.identifier(setter.value)]),
                    t.callExpression(
                      t.identifier('useState'),
                      parameters.initializer ? [parameters.initializer] : []
                    )
                  )
                ]);

                this.resolve(node);

                this.script.program.body.unshift(node);
              },
              // TODO
              getter(parameters) {
                if (!t.isIdentifier(parameters.pattern.node.property)) return;

                const token = this.getToken(parameters.id + parameters.pattern.node.property.name);

                if (!token) return;

                parameters.pattern.replaceWith(t.identifier(token.value));
              },
              setter(parameters) {
                const left = parameters.pattern.node.left as any;

                const name = left.property.name;

                const setter = this.addToken(
                  'set' + pascalCase(name),
                  'setter' + parameters.id + name
                );

                const node = t.callExpression(t.identifier(setter.value), [
                  parameters.pattern.node.right
                ]);

                this.resolve(node);

                parameters.wrapper.replaceWith(node);
              }
            }
          },
          reference(parameters) {
            const token = this.addToken(camelCase(parameters.id + 'Ref'), parameters.id);

            // TODO
            replace(
              parameters.pattern.parent,
              parameters.pattern.node,
              t.memberExpression(t.identifier(token.value), t.identifier('current'))
            );

            if (!token.new) return;

            addDependency(this.script, 'react', 'useRef', 'useRef');

            addAttribute(
              parameters.element,
              'ref',
              t.jsxExpressionContainer(t.identifier(token.value))
            );

            const node = t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier(token.value),
                t.callExpression(t.identifier('useRef'), [])
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
        final(parameters) {
          const body = t.blockStatement([]);

          body.body = getBody(parameters.pattern.node);

          parameters.pattern.node.body = parameters.pattern.node.body.filter(
            (node) => !body.body.includes(node as any)
          );

          body.body.push(t.returnStatement(this.template.program.body.at(0) as any));

          const app = t.functionDeclaration(t.identifier('App'), [], body);

          this.resolve(app);

          const exposer = t.exportDefaultDeclaration(t.identifier('App'));

          this.resolve(exposer);

          parameters.pattern.node.body.push(app, exposer);
        },
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

          addDependency(this.script, 'react', 'useEffect', 'useEffect');

          let node = this.script.program.body.find(
            (node: any) => node.callee?.name == 'useEffect'
          ) as any;

          if (!node) {
            node = t.callExpression(t.identifier('useEffect'), [
              t.arrowFunctionExpression([], t.blockStatement([])),
              t.arrayExpression([])
            ]);

            parameters.pattern.insertAfter(node);

            this.resolve(node);
          }

          const cloned = t.cloneNode(parameters.pattern.node, true);

          this.resolve(cloned);

          node.arguments[0].body.body.push(cloned);

          parameters.pattern.remove();
        },
        variable(parameters) {
          if (!parameters.isRoot) return;

          parameters.pattern.node.declarations.forEach((declaration) => {
            const id = declaration.id as any;

            // TODO
            // rename(parameters.pattern, id.name, (node) => {
            //   return t.memberExpression(node, t.identifier('value'));
            // });

            addDependency(this.script, 'react', 'useState', 'useState');

            const getter = this.addToken(id.name);

            const setter = this.addToken('set' + pascalCase(id.name), 'setter' + id.name);

            const node = t.variableDeclaration('const', [
              t.variableDeclarator(
                t.arrayPattern([t.identifier(getter.value), t.identifier(setter.value)]),
                t.callExpression(
                  t.identifier('useState'),
                  declaration.init ? [declaration.init] : []
                )
              )
            ]);

            this.resolve(node);

            parameters.pattern.insertAfter(node);
          });

          parameters.pattern.remove();
        }
      },
      template: {
        element: {
          attribute: {
            class(parameters) {
              parameters.name.name = 'className';
            },
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
            }
          },
          default() {}
        },
        fragment() {}
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

    const model = merge(context, {
      config: config && {
        content: config
      },
      script: script && {
        content: script
      }
    });

    const patterns = ['templates/**/*.*'];

    if (!context.config) {
      patterns.push('!templates/src/config.js.*');
    }

    if (!context.style) {
      patterns.push('!templates/src/index.css.*');
    }

    await write(__dirname, patterns, destination)(model);

    context.output[name] = {
      config,
      script,
      style: context.style?.content
    };
  };

  return { name, run };
};