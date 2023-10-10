import traverse from '@babel/traverse';
import * as t from '@babel/types';

import { addDependency } from './addDependency';

export interface IImportResolver {
  source: string;
  default?: string;
  namespace?: string;
  specifiers?: IImportResolverSpecifier[];
}

export interface IImportResolverSpecifier {
  imported: string;
  local: string;
}

export type IImportResolverFunction = (
  parameters: IImportResolver
) => IImportResolver | null | undefined;

export const importResolver = (node: t.File, callback: IImportResolverFunction): void => {
  traverse(node, {
    ImportDeclaration(path) {
      const previous: IImportResolver = {} as any;

      previous.default = path.node.specifiers.find((specifier) => {
        return specifier.type == 'ImportDefaultSpecifier';
      })?.local.name;

      previous.namespace = path.node.specifiers.find((specifier) => {
        return specifier.type == 'ImportNamespaceSpecifier';
      })?.local.name;

      previous.source = path.node.source.value;

      previous.specifiers = path.node.specifiers.map((specifier: any) => {
        return {
          imported: specifier.imported.name,
          local: specifier.local.name
        };
      });

      const next = callback(previous);

      if (next === undefined) return;

      path.remove();

      if (next === null) return;

      const specifiers = next.specifiers || previous.specifiers;

      if (specifiers.length) {
        specifiers.forEach((specifier) => {
          addDependency(node, next.source, specifier.local, specifier.imported);
        });
      } else {
        addDependency(node, next.source);
      }
    }
  });
};
