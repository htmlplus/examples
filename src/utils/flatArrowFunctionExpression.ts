import type * as t from '@babel/types';
import { cloneNode } from '@babel/types';

export const flatArrowFunctionExpression = (
	handler: t.ArrowFunctionExpression
): t.CallExpression => {
	const body = cloneNode(handler.body as any, true);

	if (handler.params.length) {
		for (const argument of body.arguments) {
			if (argument.type !== 'Identifier') continue;

			if (argument.name !== (handler.params.at(0) as any)?.name) continue;

			argument.name = '$event';

			break;
		}
	}

	return body;
};
