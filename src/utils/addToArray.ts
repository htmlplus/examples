import * as t from '@babel/types';

export const addToArray = (
  nodes: t.Node[],
  node: t.Node,
  override: (node: t.Node) => boolean
): void => {
  const index = nodes.findIndex((item) => {
    return override(item) && override(item) === override(node);
  });
  if (index == -1) {
    nodes.splice(0, 0, node);
  } else {
    nodes.splice(index, 1, node);
  }
};
