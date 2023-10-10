import { parse } from '@babel/parser';
import * as t from '@babel/types';

export const getAttribute = (
  element: t.JSXElement,
  name: string
): t.JSXElement | t.JSXFragment | t.StringLiteral | t.JSXExpressionContainer | null | undefined => {
  const attribute = element.openingElement.attributes.find((node) => {
    return t.isJSXAttribute(node) && node.name.name == name;
  });

  if (!attribute) return;

  if (!t.isJSXAttribute(attribute)) return;

  if (attribute.value === null) return null;

  if (t.isJSXExpressionContainer(attribute.value)) return attribute.value;

  const value = (attribute.value as any)?.value;

  if (value === undefined) return;

  if (!!`${value}`.trim() && !isNaN(`${value}` as any)) {
    return t.jsxExpressionContainer(t.numericLiteral(parseFloat(value)));
  }

  if (['false', 'true'].includes(value)) {
    return t.jsxExpressionContainer(t.booleanLiteral(value === 'true'));
  }

  try {
    JSON.parse(value);
    return t.jsxExpressionContainer(
      (parse(value, { sourceType: 'module' }).program.body[0] as any).expression
    );
  } catch {}

  return attribute.value;
};
