import * as t from '@babel/types';

export const addAttribute = (
  element: t.JSXElement,
  name: string,
  value?: t.JSXElement | t.JSXExpressionContainer | t.JSXFragment | t.StringLiteral
): void => {
  const attribute = t.jsxAttribute(t.jsxIdentifier(name), value);

  const nodes = element.openingElement.attributes;

  const index = nodes.findIndex((node) => {
    return (node as any).name.name == name;
  });

  if (index == -1) {
    nodes.push(attribute);
  } else {
    nodes.splice(index, 1, attribute);
  }
};
