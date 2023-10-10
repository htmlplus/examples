import traverse from '@babel/traverse';
import { ImportDeclaration } from '@babel/types';
import * as t from '@babel/types';

interface AddDependencyReturns {
  local?: string;
  node: ImportDeclaration;
}

export const addDependency = (
  node: t.File,
  source: string,
  local?: string,
  imported?: string
): AddDependencyReturns => {
  const isDefault = !!local && !imported;

  const isImport = !!local && !!imported;

  const isNormal = !local && !imported;

  let declaration: ImportDeclaration | undefined;

  traverse(node, {
    ImportDeclaration(path) {
      if (path.node.source.value != source) return;
      declaration = path.node;
    }
  });

  if (isNormal && declaration)
    return {
      node: declaration
    };

  let specifier = declaration?.specifiers.find((specifier) => {
    if (isDefault) {
      return specifier.type == 'ImportDefaultSpecifier';
    } else if (isImport) {
      return (specifier as any)['imported']?.name == imported;
    }
  });

  if (specifier)
    return {
      local: specifier.local.name,
      node: declaration!
    };

  if (isDefault) {
    specifier = t.importDefaultSpecifier(t.identifier(local));
  } else if (isImport) {
    specifier = t.importSpecifier(t.identifier(local), t.identifier(imported));
  }

  if (declaration) {
    if (isDefault) {
      declaration.specifiers.unshift(specifier!);
    } else if (isImport) {
      declaration.specifiers.push(specifier!);
    }
  } else {
    declaration = t.importDeclaration(specifier ? [specifier] : [], t.stringLiteral(source));

    node.program.body.unshift(declaration);
  }

  return {
    local,
    node: declaration
  };
};
