import * as t from '@babel/types';
import { getAttribute } from './getAttribute';

export const hasAttribute = (element: t.JSXElement, name: string): boolean => {
  return getAttribute(element, name) !== undefined;
};
