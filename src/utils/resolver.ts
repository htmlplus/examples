import core from '@babel/traverse';
import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import { cloneNode } from '@babel/types';

import { IContext } from '@/types';
import { getAttribute, hasAttribute } from '@/utils';

import { getElementById } from './getElementById';

const MARK_TOKEN = 'RESOLVED';

export type IResolverFunction<Parameters> = (this: Resolver, parameters: Parameters) => void;

export interface IResolverOptions {
  script: {
    arrowFunctionExpression: {
      /**
       * Examples:
       * ```
       *   const name = () => any
       * ```
       */
      constant: IResolverFunction<{
        function: t.ArrowFunctionExpression;
        id: string;
        isRoot: boolean;
        pattern: NodePath<t.VariableDeclaration>;
      }>;
    };
    /**
     * Examples:
     * ```
     *   // 1
     *   const name = value;
     *
     *   // 2
     *   const name1 = value1,
     *         name2 = value2;
     * ```
     */
    constant: IResolverFunction<{ isRoot: boolean; pattern: NodePath<t.VariableDeclaration> }>;
    element: {
      method: {
        addEventListener: {
          arrowFunctionExpression: {
            /**
             * Examples:
             * ```
             *   element.addEventListener('event', () => {})
             * ```
             */
            blockStatement: IResolverFunction<{
              element: t.JSXElement;
              event: string;
              handler: t.ArrowFunctionExpression;
              id: string;
              isRoot: boolean;
              pattern: NodePath<t.CallExpression>;
              wrapper: NodePath<t.ExpressionStatement>;
            }>;
            /**
             * Examples:
             * ```
             *   element.addEventListener('event', (event) => handler(arguments, event))
             * ```
             */
            callExpression: IResolverFunction<{
              element: t.JSXElement;
              event: string;
              handler: t.ArrowFunctionExpression;
              id: string;
              isRoot: boolean;
              pattern: NodePath<t.CallExpression>;
              wrapper: NodePath<t.ExpressionStatement>;
            }>;
          };
          /**
           * Examples:
           * ```
           *   // 1
           *   element.addEventListener('event', handler(arguments))
           *
           *   // 2
           *   element.addEventListener('event', handler(arguments)(arguments))
           * ```
           */
          callExpression: IResolverFunction<{
            element: t.JSXElement;
            event: string;
            handler: t.CallExpression;
            id: string;
            isRoot: boolean;
            pattern: NodePath<t.CallExpression>;
            wrapper: NodePath<t.ExpressionStatement>;
          }>;
          /**
           * Examples:
           * ```
           *   element.addEventListener('event', function () => {})
           * ```
           */
          functionExpression: IResolverFunction<{
            element: t.JSXElement;
            event: string;
            handler: t.FunctionExpression;
            id: string;
            isRoot: boolean;
            pattern: NodePath<t.CallExpression>;
            wrapper: NodePath<t.ExpressionStatement>;
          }>;
          /**
           * Examples:
           * ```
           *   element.addEventListener('event', handler)
           * ```
           */
          identifier: IResolverFunction<{
            element: t.JSXElement;
            event: string;
            handler: t.Identifier;
            id: string;
            isRoot: boolean;
            pattern: NodePath<t.CallExpression>;
            wrapper: NodePath<t.ExpressionStatement>;
          }>;
        };
      };
      property: {
        /**
         * Examples:
         * ```
         *   // only in root
         *   element.property = initializer;
         * ```
         */
        constant: IResolverFunction<{
          element: t.JSXElement;
          id: string;
          initializer: t.Expression;
          pattern: NodePath<t.AssignmentExpression>;
          property: t.Identifier;
        }>;
        state: {
          /**
           * Examples:
           * ```
           *   // in template
           *   <element id="element" property="value" />
           *
           *   // anywhere in script
           *   element.property
           * ```
           */
          define: IResolverFunction<{
            element: t.JSXElement;
            id: string;
            initializer:
              | t.ArrayExpression
              | t.BooleanLiteral
              | t.NumericLiteral
              | t.ObjectExpression
              | t.StringLiteral;
            pattern: NodePath<t.MemberExpression>;
            property: t.Identifier;
          }>;
          /**
           * Examples:
           * ```
           *   // in template
           *   <element id="element" property="value" />
           *
           *   // anywhere in script
           *   element.property;
           * ```
           */
          getter: IResolverFunction<{
            element: t.JSXElement;
            id: string;
            pattern: NodePath<t.MemberExpression>;
          }>;
          /**
           * Examples:
           * ```
           *   // in template
           *   <element id="element" property="value" />
           *
           *   // anywhere in script
           *   element.property = any;
           * ```
           */
          setter: IResolverFunction<{
            element: t.JSXElement;
            id: string;
            pattern: NodePath<t.AssignmentExpression>;
            wrapper: NodePath<t.ExpressionStatement>;
          }>;
        };
      };
      /**
       * Examples:
       * ```
       *   // in template
       *   <element id="element"/>
       *
       *   // anywhere in script
       *   element
       * ```
       */
      reference: IResolverFunction<{
        element: t.JSXElement;
        id: string;
        pattern: NodePath<t.Identifier>;
      }>;
    };
    /**
     * TODO
     */
    final: IResolverFunction<{ pattern: NodePath<t.Program> }>;
    /**
     * Examples:
     * ```
     *   function name() {}
     * ```
     */
    functionDeclaration: IResolverFunction<{
      id: string;
      isRoot: boolean;
      pattern: NodePath<t.FunctionDeclaration>;
    }>;
    functionExpression: {
      /**
       * Examples:
       * ```
       *   const name = function() {}
       * ```
       */
      constant: IResolverFunction<{
        function: t.FunctionExpression;
        id: string;
        isRoot: boolean;
        pattern: NodePath<t.VariableDeclaration>;
      }>;
    };
    /**
     * anything that is not marked
     */
    unresolved: IResolverFunction<{ isRoot: boolean; pattern: NodePath<t.Node> }>;
    /**
     * Examples:
     * ```
     *   // 1
     *   let name = value;
     *
     *   // 2
     *   let name1 = value1,
     *       name2 = value2;
     *
     *   // 3
     *   var name = value;
     *
     *   // 4
     *   var name1 = value1,
     *       name2 = value2;
     * ```
     */
    variable: {
      /**
       * Examples:
       * ```
       *   // 1
       *   let name = value;
       *
       *   // 2
       *   let name1 = value1,
       *       name2 = value2;
       *
       *   // 3
       *   var name = value;
       *
       *   // 4
       *   var name1 = value1,
       *       name2 = value2;
       * ```
       */
      define: IResolverFunction<{
        isRoot: boolean;
        pattern: NodePath<t.VariableDeclaration>;
      }>;
      /**
       * Examples:
       * ```
       *   // anywhere in script
       *   name;
       * ```
       */
      getter: IResolverFunction<{
        pattern: NodePath<t.Identifier>;
      }>;
      /**
       * Examples:
       * ```
       *   // anywhere in script
       *   name = any;
       * ```
       */
      setter: IResolverFunction<{
        pattern: NodePath<t.AssignmentExpression>;
        wrapper: NodePath<t.ExpressionStatement>;
      }>;
    };
  };
  template: {
    element: {
      attribute: {
        /**
         * Examples:
         * ```
         *   <element name="value" />
         * ```
         */
        class: IResolverFunction<{
          element: t.JSXElement;
          name: t.JSXIdentifier;
          pattern: NodePath<t.JSXAttribute>;
          value?: t.StringLiteral;
        }>;
        /**
         * Examples:
         * ```
         *   <element name="value" />
         * ```
         */
        default: IResolverFunction<{
          element: t.JSXElement;
          name: t.JSXIdentifier;
          pattern: NodePath<t.JSXAttribute>;
          value?: t.StringLiteral;
        }>;
        /**
         * Examples:
         * ```
         *   <element name="value" />
         * ```
         */
        id: IResolverFunction<{
          element: t.JSXElement;
          name: t.JSXIdentifier;
          pattern: NodePath<t.JSXAttribute>;
          value?: t.StringLiteral;
        }>;
        /**
         * Examples:
         * ```
         *   <element style="value" />
         * ```
         */
        style: IResolverFunction<{
          element: t.JSXElement;
          name: t.JSXIdentifier;
          pattern: NodePath<t.JSXAttribute>;
          value?: t.StringLiteral;
        }>;
      };
      /**
       * Examples:
       * ```
       *   // 1
       *   <element />
       *
       *   // 2
       *   <element></element>
       * ```
       */
      default: IResolverFunction<{
        pattern: NodePath<t.JSXElement>;
      }>;
    };
    /**
     * Examples:
     * ```
     *   <></>
     * ```
     */
    fragment: IResolverFunction<{
      pattern: NodePath<t.JSXFragment>;
    }>;
  };
}

export interface IResolverToken {
  key: string;
  scope: string;
  new?: boolean;
  value: string;
}

export class Resolver {
  public config: t.File;

  public script: t.File;

  public template: t.File;

  public tokens: IResolverToken[] = [];

  constructor(
    public context: IContext,
    public options: IResolverOptions
  ) {
    this.config = cloneNode(context.configAST!, true);

    this.script = cloneNode(context.scriptAST!, true);

    this.template = cloneNode(context.templateAST!, true);
  }

  public addToken(key: string, scope?: string, unique?: boolean): IResolverToken {
    scope ??= key;

    const prev = this.getToken(scope);

    if (prev && !unique) return prev;

    const value = Array(5)
      .fill('')
      .map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
      .join('');

    const next: IResolverToken = {
      key,
      scope,
      value
    };

    this.tokens.push(next);

    return Object.assign({}, next, { new: true });
  }

  public getToken(scope: string): IResolverToken | undefined {
    return this.tokens.find((token) => token.scope == scope);
  }

  public resolve(node: t.Node) {
    if (!this.resolved(node)) {
      t.addComment(node, 'leading', MARK_TOKEN);
    }
  }

  public resolved(node: t.Node): boolean {
    return !!node.leadingComments?.some((comment) => comment.value == MARK_TOKEN);
  }

  public execute() {
    // script.element.method.addEventListener.*
    core(this.script, {
      Identifier: (path) => {
        const element = getElementById(this.template, path.node.name);

        if (!element) return;

        if (!t.isMemberExpression(path.parent)) return;

        if (!t.isCallExpression(path.parentPath.parent)) return;

        if (!t.isExpressionStatement(path.parentPath.parentPath!.parent)) return;

        if (!t.isIdentifier(path.parent.property, { name: 'addEventListener' })) return;

        const wrapper = path.parentPath!.parentPath!.parentPath!;

        if (this.resolved(wrapper.node)) return;

        const [event, handler] = path.parentPath!.parent.arguments;

        const id = path.node.name;

        const isRoot = t.isProgram(path.parentPath!.parentPath!.parentPath!.parent);

        const parameters = {
          element,
          event: (event as any).value,
          handler,
          id,
          isRoot,
          path: path.parentPath.parentPath,
          wrapper
        } as any;

        switch (handler.type) {
          case 'ArrowFunctionExpression': {
            switch (handler.body.type) {
              case 'BlockStatement': {
                this.options.script.element.method.addEventListener.arrowFunctionExpression.blockStatement.bind(
                  this
                )(parameters);
                break;
              }
              case 'CallExpression': {
                this.options.script.element.method.addEventListener.arrowFunctionExpression.callExpression.bind(
                  this
                )(parameters);
                break;
              }
            }

            break;
          }
          case 'CallExpression': {
            this.options.script.element.method.addEventListener.callExpression.bind(this)(
              parameters
            );
            break;
          }
          case 'FunctionExpression': {
            this.options.script.element.method.addEventListener.functionExpression.bind(this)(
              parameters
            );
            break;
          }
          case 'Identifier': {
            this.options.script.element.method.addEventListener.identifier.bind(this)(parameters);
            break;
          }
        }
      }
    });

    // script.functionDeclaration
    core(this.script, {
      FunctionDeclaration: (path) => {
        if (this.resolved(path.node)) return;

        const id = path.node.id!.name;

        const isRoot = t.isProgram(path.parent);

        const pattern = path;

        const parameters = {
          id,
          isRoot,
          pattern
        };

        this.options.script.functionDeclaration.bind(this)(parameters);
      }
    });

    // script.functionExpression.constant
    core(this.script, {
      FunctionExpression: (path) => {
        if (!t.isVariableDeclarator(path.parent)) return;

        if (!t.isIdentifier(path.parent.id)) return;

        if (!t.isVariableDeclaration(path.parentPath.parent, { kind: 'const' })) return;

        if (this.resolved(path.parentPath!.parentPath!.node)) return;

        const id = path.parent.id.name;

        const isRoot = t.isProgram(path.parentPath.parentPath!.parent);

        const pattern = path.parentPath!.parentPath as any;

        const parameters = {
          function: path.node,
          id,
          isRoot,
          pattern
        };

        this.options.script.functionExpression.constant.bind(this)(parameters);
      }
    });

    // script.arrowFunctionExpression.constant
    core(this.script, {
      ArrowFunctionExpression: (path) => {
        if (!t.isVariableDeclarator(path.parent)) return;

        if (!t.isIdentifier(path.parent.id)) return;

        if (!t.isVariableDeclaration(path.parentPath.parent, { kind: 'const' })) return;

        if (this.resolved(path.parentPath!.parentPath!.node)) return;

        const id = path.parent.id.name;

        const isRoot = t.isProgram(path.parentPath.parentPath!.parent);

        const pattern = path.parentPath!.parentPath as any;

        const parameters = {
          function: path.node,
          id,
          isRoot,
          pattern
        };

        this.options.script.arrowFunctionExpression.constant.bind(this)(parameters);
      }
    });

    // script.constant
    core(this.script, {
      VariableDeclaration: (path) => {
        if (path.node.kind !== 'const') return;

        if (this.resolved(path.node)) return;

        const isRoot = t.isProgram(path.parent);

        const pattern = path;

        const parameters = {
          isRoot,
          pattern
        };

        this.options.script.constant.bind(this)(parameters);
      }
    });

    // TODO
    // script.variable.setter
    core(this.script, {
      Identifier: (path) => {
        if (!t.isAssignmentExpression(path.parent)) return;

        if (!t.isExpressionStatement(path.parentPath!.parent)) return;

        const binding = path.scope.getBinding(path.node.name);

        if (!binding) return;

        if (!t.isVariableDeclarator(binding.path.node)) return;

        if (!t.isVariableDeclaration(binding.path.parentPath!.node)) return;

        if (!['var', 'let'].includes(binding.path.parentPath!.node.kind)) return;

        const wrapper = path.parentPath!.parentPath as any;

        if (this.resolved(wrapper.node)) return;

        const parameters = {
          pattern: path.parentPath as any,
          wrapper
        };

        this.options.script.variable.setter.bind(this)(parameters);
      }
    });

    // TODO
    // script.variable.getter
    core(this.script, {
      Identifier: (path) => {
        const binding = path.scope.getBinding(path.node.name);

        if (!binding) return;

        if (!t.isVariableDeclarator(binding.path.node)) return;

        if (!t.isVariableDeclaration(binding.path.parentPath!.node)) return;

        if (!['var', 'let'].includes(binding.path.parentPath!.node.kind)) return;

        if (path.parent == binding.path.node) return;

        if (!binding.referencePaths.some((reference) => reference.node === path.node)) return;

        const parameters = {
          pattern: path
        };

        this.options.script.variable.getter.bind(this)(parameters);
      }
    });

    // TODO
    // script.variable.define
    core(this.script, {
      VariableDeclaration: (path) => {
        if (path.node.kind !== 'let' && path.node.kind !== 'var') return;

        if (this.resolved(path.node)) return;

        const isRoot = t.isProgram(path.parent);

        const pattern = path;

        const parameters = {
          isRoot,
          pattern
        };

        this.options.script.variable.define.bind(this)(parameters);
      }
    });

    // script.element.property.constant
    core(this.script, {
      Identifier: (path) => {
        const element = getElementById(this.template, path.node.name);

        if (!element) return;

        if (!t.isIdentifier(path.node)) return;

        if (!t.isMemberExpression(path.parent)) return;

        if (!t.isAssignmentExpression(path.parentPath.parent)) return;

        if (!t.isExpressionStatement(path.parentPath.parentPath!.parent)) return;

        if (!t.isProgram(path.parentPath.parentPath!.parentPath!.parent)) return;

        if (this.resolved(path.parentPath.parent)) return;

        const id = path.node.name;

        const pattern = path.parentPath.parentPath as any;

        const initializer = pattern.node.right;

        const property = pattern.node.left.property;

        const parameters = {
          element,
          id,
          initializer,
          pattern,
          property
        };

        this.options.script.element.property.constant.bind(this)(parameters);
      }
    });

    // script.element.property.state.define
    core(this.script, {
      Identifier: (path) => {
        const element = getElementById(this.template, path.node.name);

        if (!element) return;

        if (!t.isIdentifier(path.node)) return;

        if (!t.isMemberExpression(path.parent)) return;

        if (!t.isIdentifier(path.parent.property)) return;

        if (!hasAttribute(element, path.parent.property.name)) return;

        if (this.resolved(path.parent)) return;

        const attribute = getAttribute(element, path.parent.property.name);

        const id = path.node.name;

        const initializer = (attribute as any)?.expression || attribute || t.booleanLiteral(true);

        const pattern = path.parentPath as any;

        const property = pattern.node.property;

        const parameters = {
          element,
          id,
          initializer,
          pattern,
          property
        };

        this.options.script.element.property.state.define.bind(this)(parameters);
      }
    });

    // script.element.property.state.setter
    core(this.script, {
      Identifier: (path) => {
        const element = getElementById(this.template, path.node.name);

        if (!element) return;

        if (!t.isIdentifier(path.node)) return;

        if (!t.isMemberExpression(path.parent)) return;

        if (!t.isIdentifier(path.parent.property)) return;

        if (!t.isAssignmentExpression(path.parentPath.parent)) return;

        if (!t.isExpressionStatement(path.parentPath.parentPath!.parent)) return;

        if (!hasAttribute(element, path.parent.property.name)) return;

        const wrapper = path.parentPath.parentPath!.parentPath as any;

        if (this.resolved(wrapper.node)) return;

        const id = path.node.name;

        const pattern = path.parentPath.parentPath as any;

        const parameters = {
          element,
          id,
          pattern,
          wrapper
        };

        this.options.script.element.property.state.setter.bind(this)(parameters);
      }
    });

    // script.element.property.state.getter
    core(this.script, {
      Identifier: (path) => {
        const element = getElementById(this.template, path.node.name);

        if (!element) return;

        if (!t.isIdentifier(path.node)) return;

        if (!t.isMemberExpression(path.parent)) return;

        if (!t.isIdentifier(path.parent.property)) return;

        if (!hasAttribute(element, path.parent.property.name)) return;

        if (this.resolved(path.parent)) return;

        const id = path.node.name;

        const pattern = path.parentPath as any;

        const parameters = {
          element,
          id,
          pattern
        };

        this.options.script.element.property.state.getter.bind(this)(parameters);
      }
    });

    // script.element.reference
    core(this.script, {
      Identifier: (path) => {
        const element = getElementById(this.template, path.node.name);

        if (!element) return;

        if (this.resolved(path.node)) return;

        const id = path.node.name;

        const pattern = path;

        const parameters = {
          element,
          id,
          pattern
        };

        this.options.script.element.reference.bind(this)(parameters);
      }
    });

    // script.unresolved
    core(this.script, {
      enter: (path) => {
        if (this.resolved(path.node)) return;

        const isRoot = t.isProgram(path.parent);

        const pattern = path;

        const parameters = {
          isRoot,
          pattern
        };

        this.options.script.unresolved.bind(this)(parameters);
      }
    });

    // script.final
    core(this.script, {
      Program: (path) => {
        const pattern = path;

        const parameters = {
          pattern
        };

        this.options.script.final.bind(this)(parameters);
      }
    });

    // template.element.attribute.class
    core(this.template, {
      JSXAttribute: (path) => {
        if (path.node.name.name != 'class') return;

        const parameters = {
          element: path.parentPath.parent as t.JSXElement,
          name: path.node.name as t.JSXIdentifier,
          pattern: path,
          value: path.node.value as any
        };

        this.options.template.element.attribute.class.bind(this)(parameters);
      }
    });

    // template.element.attribute.id
    core(this.template, {
      JSXAttribute: (path) => {
        if (path.node.name.name != 'id') return;

        const parameters = {
          element: path.parentPath.parent as t.JSXElement,
          name: path.node.name as t.JSXIdentifier,
          pattern: path,
          value: path.node.value as any
        };

        this.options.template.element.attribute.id.bind(this)(parameters);
      }
    });

    // template.element.attribute.style
    core(this.template, {
      JSXAttribute: (path) => {
        if (path.node.name.name != 'style') return;

        const parameters = {
          element: path.parentPath.parent as t.JSXElement,
          name: path.node.name as t.JSXIdentifier,
          pattern: path,
          value: path.node.value as any
        };

        this.options.template.element.attribute.style.bind(this)(parameters);
      }
    });

    // template.element.attribute.default
    core(this.template, {
      JSXAttribute: (path) => {
        const parameters = {
          element: path.parentPath.parent as t.JSXElement,
          name: path.node.name as t.JSXIdentifier,
          pattern: path,
          value: path.node.value as any
        };

        this.options.template.element.attribute.default.bind(this)(parameters);
      }
    });

    // template.element.default
    core(this.template, {
      JSXElement: (path) => {
        const parameters = {
          pattern: path
        };
        this.options.template.element.default.bind(this)(parameters);
      }
    });

    // template.fragment
    core(this.template, {
      JSXFragment: (path) => {
        const parameters = {
          pattern: path
        };
        this.options.template.fragment.bind(this)(parameters);
      }
    });

    // tokens
    (() => {
      const tokens: IResolverToken[] = [];

      let cloned = this.tokens.map((token) => Object.assign({}, token));

      while (cloned.length) {
        const main = cloned.at(0)!;

        const filtered = cloned.filter((item) => item.key == main.key);

        cloned = cloned.filter((item) => item.key != main.key);

        if (filtered.length > 1) {
          for (let i = 0; i < filtered.length; i++) {
            filtered[i].key += i + 1;
          }
        }

        tokens.push(...filtered);
      }

      const options = {
        Identifier: (path: NodePath<t.Identifier>) => {
          for (const token of tokens) {
            path.node.name = path.node.name.replace(token.value, token.key);
          }
        },
        StringLiteral: (path: NodePath<t.StringLiteral>) => {
          for (const token of tokens) {
            path.node.value = path.node.value.replace(token.value, token.key);
          }
        }
      };

      core(this.script, options);

      core(this.template, options);
    })();

    // marks
    core(this.script, {
      enter: (path) => {
        if (this.resolved(path.node)) {
          path.node.leadingComments = path.node.leadingComments!.filter(
            (comment) => comment.value != MARK_TOKEN
          );
        }
      }
    });
  }
}
