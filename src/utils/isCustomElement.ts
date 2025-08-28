import type { JSXElement } from '@babel/types';

export const isCustomElement = (element: JSXElement) => {
	return (element.openingElement.name as any).name.indexOf('-') !== -1;
};
