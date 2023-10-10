import traverse from '@babel/traverse';
import * as t from '@babel/types';

export const getElementById = (parent: t.Node, id: string): t.JSXElement | undefined => {
  let element;

  traverse(parent, {
    JSXAttribute(path) {
      if (!path.node.value) return;

      if (path.node.name.name != 'id') return;

      if (path.node.value.extra!.rawValue != id) return;

      element = path.parentPath?.parent;
    }
  });

  return element;
};
