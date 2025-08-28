import type { NodePath } from '@babel/traverse';
import type * as t from '@babel/types';

export const rename = (
	path: NodePath<t.Node>,
	name: string,
	replace: (node: t.Identifier) => t.Node
) => {
	const binding = path.scope.getBinding(name);

	if (!binding) return;

	for (const reference of binding.referencePaths) {
		switch (reference.node.type) {
			case 'Identifier': {
				reference.replaceWith(replace(reference.node));
				break;
			}
		}
	}

	for (const reference of binding.constantViolations) {
		switch (reference.node.type) {
			case 'AssignmentExpression': {
				(reference.node as any).left = replace(reference.node.left as any);
				break;
			}
		}
	}
};
