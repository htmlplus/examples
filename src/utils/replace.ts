import * as t from '@babel/types';

export const replace = (parent: t.Node, source: t.Node, target: t.Node) => {
  for (const key in parent) {
    if (!Object.prototype.hasOwnProperty.call(parent, key)) continue;

    if ((parent as any)[key] != source) continue;

    (parent as any)[key] = target;

    break;
  }
};
