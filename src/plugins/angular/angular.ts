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
  flatArrowFunctionExpression,
  format,
  getAttribute,
  getBody,
  importResolver,
  isCustomElement,
  rename,
  toClassMethod,
  write
} from '@/utils';

export interface IAngularOptions {
  destination: (context: IContext) => string;
  eventResolver: (name: string) => string;
  importResolver: IImportResolverFunction;
  isStringAttribute: (element: string, name: string) => boolean;
}

export const angular: IPlugin<IAngularOptions> = (options) => {
  const name = 'angular';

  const run = async (context: IContext) => {
    if (context.skip) return;

    const destination = options.destination(context);

    const resolver = new Resolver(context, {
      script: {
        arrowFunctionExpression: {
          constant(parameters) {
            if (!parameters.isRoot) return;

            // TODO: check the `parameters.pattern`
            rename(parameters.pattern, parameters.id, (node) => {
              return t.memberExpression(t.thisExpression(), node);
            });

            const node = toClassMethod(parameters.id, parameters.function);

            this.resolve(node);

            parameters.pattern.replaceWith(node);
          }
        },
        constant(parameters) {
          if (!parameters.isRoot) return;

          parameters.pattern.node.declarations.forEach((declaration) => {
            const id = declaration.id as any;

            rename(parameters.pattern, id.name, (node) => {
              return t.memberExpression(t.thisExpression(), node);
            });

            const node = t.classProperty(id, declaration.init);

            this.resolve(node);

            parameters.pattern.insertAfter(node);
          });

          parameters.pattern.remove();
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
                    '(' + event + ')',
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
                  '(' + event + ')',
                  t.stringLiteral(generator(parameters.handler).code + '($event)')
                );

                parameters.wrapper.remove();
              },
              functionExpression(parameters) {
                if (!parameters.isRoot) return;

                const event = options.eventResolver(parameters.event);

                const token = this.addToken('on' + pascalCase(event), event, true);

                addAttribute(
                  parameters.element,
                  '(' + event + ')',
                  t.stringLiteral(
                    token.value + '(' + (parameters.handler.params.length ? '$event' : '') + ')'
                  )
                );

                const node = toClassMethod(token.value, parameters.handler);

                this.resolve(node);

                parameters.wrapper.replaceWith(node);
              },
              identifier(parameters) {
                if (!parameters.isRoot) return;

                const event = options.eventResolver(parameters.event);

                addAttribute(
                  parameters.element,
                  '(' + event + ')',
                  t.stringLiteral(parameters.handler.name + '($event)')
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
                '[' + parameters.property.name + ']',
                t.stringLiteral(token.value)
              );

              parameters.property.name = token.value;

              const node = t.classProperty(t.identifier(token.value), parameters.initializer);

              this.resolve(node);

              addToArray(this.script.program.body, node, (input: any) => {
                return t.isClassProperty(input) && (input.key as any).name == token.value;
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
                  '[' + parameters.property.name + ']',
                  t.stringLiteral(token.value)
                );

                const node = t.classProperty(t.identifier(token.value), parameters.initializer);

                this.resolve(node);

                this.script.program.body.unshift(node as any);
              },
              getter(parameters) {
                if (!t.isIdentifier(parameters.pattern.node.property)) return;

                const token = this.getToken(parameters.id + parameters.pattern.node.property.name);

                if (!token) return;

                parameters.pattern.node.object = t.thisExpression();

                parameters.pattern.node.property.name = token.value;
              },
              setter(parameters) {
                const left = parameters.pattern.node.left as any;

                const name = left.property.name;

                const token = this.addToken(name, parameters.id + name);

                left.object = t.thisExpression();

                left.property = t.identifier(token.value);

                this.resolve(parameters.wrapper.node);
              }
            }
          },
          reference(parameters) {
            const token = this.addToken(camelCase(parameters.id + 'Ref'), parameters.id);

            parameters.pattern.node.name = token.value;

            parameters.pattern.replaceWith(
              t.memberExpression(
                t.memberExpression(t.thisExpression(), parameters.pattern.node),
                t.identifier('nativeElement')
              )
            );

            if (!token.new) return;

            addDependency(this.script, '@angular/core', 'ElementRef', 'ElementRef');

            addDependency(this.script, '@angular/core', 'ViewChild', 'ViewChild');

            // TODO
            const cleaned = parameters.id.replace('$', '');

            addAttribute(parameters.element, '#' + cleaned);

            const node = Object.assign(
              t.classProperty(
                t.identifier(token.value),
                undefined,
                t.tsTypeAnnotation(t.tsTypeReference(t.identifier('ElementRef'))),
                [
                  t.decorator(
                    t.callExpression(t.identifier('ViewChild'), [t.stringLiteral(cleaned)])
                  )
                ]
              ),
              {
                definite: true
              }
            );

            this.resolve(node);

            addToArray(this.script.program.body, node, (input: any) => {
              return t.isClassProperty(input) && (input.key as any).name == token.value;
            });
          }
        },
        final(parameters) {
          const body = t.classBody([]);

          body.body = getBody(parameters.pattern.node) as any;

          parameters.pattern.node.body = parameters.pattern.node.body.filter(
            (node) => !body.body.includes(node as any)
          );

          addDependency(this.script, '@angular/core', 'Component', 'Component');

          const component = t.exportNamedDeclaration(
            t.classDeclaration(t.identifier('AppComponent'), undefined, body, [
              t.decorator(
                t.callExpression(t.identifier('Component'), [
                  t.objectExpression([
                    t.objectProperty(t.identifier('selector'), t.stringLiteral('app-root')),
                    t.objectProperty(
                      t.identifier('templateUrl'),
                      t.stringLiteral('./app.component.html')
                    ),
                    t.objectProperty(
                      t.identifier('styleUrls'),
                      t.arrayExpression([t.stringLiteral('./app.component.css')])
                    )
                  ])
                ])
              )
            ])
          );

          this.resolve(component);

          parameters.pattern.node.body.push(component);
        },
        functionDeclaration(parameters) {
          if (!parameters.isRoot) return;

          rename(parameters.pattern, parameters.id, (node) => {
            return t.memberExpression(t.thisExpression(), node);
          });

          const node = toClassMethod(parameters.id, parameters.pattern.node);

          this.resolve(node);

          parameters.pattern.replaceWith(node);
        },
        functionExpression: {
          constant(parameters) {
            if (!parameters.isRoot) return;

            rename(parameters.pattern, parameters.id, (node) => {
              return t.memberExpression(t.thisExpression(), node);
            });

            const node = toClassMethod(parameters.id, parameters.function);

            this.resolve(node);

            parameters.pattern.replaceWith(node);
          }
        },
        unresolved(parameters) {
          if (!parameters.isRoot) return;

          if (t.isImportDeclaration(parameters.pattern.node)) return;

          let node = this.script.program.body.find((node: any) => {
            return t.isClassMethod(node) && (node.key as any).name == 'ngAfterViewInit';
          }) as any;

          if (!node) {
            node = t.classMethod(
              'method',
              t.identifier('ngAfterViewInit'),
              [],
              t.blockStatement([])
            );

            parameters.pattern.insertAfter(node);

            this.resolve(node);
          }

          const cloned = t.cloneNode(parameters.pattern.node, true);

          this.resolve(cloned);

          node.body.body.push(cloned);

          parameters.pattern.remove();
        },
        variable: {
          define(parameters) {
            if (!parameters.isRoot) return;

            parameters.pattern.node.declarations.forEach((declaration) => {
              const id = declaration.id as any;

              const node = t.classProperty(id, declaration.init);

              this.resolve(node);

              parameters.pattern.insertAfter(node);
            });

            parameters.pattern.remove();
          },
          getter(parameters) {
            parameters.pattern.replaceWith(
              t.memberExpression(t.thisExpression(), parameters.pattern.node)
            );
          },
          setter(parameters) {
            parameters.pattern.node.left = t.memberExpression(
              t.thisExpression(),
              parameters.pattern.node.left as any
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
                (attribute: any) => attribute.name.name == '[' + parameters.name.name + ']'
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

              parameters.name.name = '[' + parameters.name.name + ']';
            },
            id(parameters) {
              if (parameters.value?.value.startsWith('$')) {
                parameters.pattern.remove();
              }
            },
            style() { }
          },
          default() { }
        },
        fragment() { }
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

      const { code } = generator(resolver.script, { decoratorsBeforeExport: true });

      const formatted = await format(code, { parser: 'typescript' });

      return formatted;
    })();

    const template = await (async () => {
      if (!context.templateAST) return;

      const { code } = generator(resolver.template, {});

      const cleaned = code.replace(/<>|<\/>/g, '');

      const formatted = await format(cleaned, { parser: 'html' });

      return formatted;
    })();

    const model = merge(context, {
      configContent: config,
      scriptContent: script,
      templateContent: template
    });

    const patterns = ['templates/**/*.*'];

    if (!context.configAST) {
      patterns.push('!templates/src/config.ts.*');
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
