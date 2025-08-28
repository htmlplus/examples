import * as t from '@babel/types';

export const toClassMethod = (
	id: string,
	node: t.ArrowFunctionExpression | t.FunctionDeclaration | t.FunctionExpression
): t.ClassMethod => {
	const body = t.blockStatement([]);

	if (node.body.type === 'BlockStatement') {
		body.body = node.body.body;
	} else {
		body.body[0] = t.returnStatement(node.body);
	}

	return t.classMethod('method', t.identifier(id), node.params, body);
};
