import type * as t from '@babel/types';

export const getBody = (program: t.Program): t.Statement[] => {
	return program.body.filter(
		(node) => !node.type.startsWith('Import') && !node.type.startsWith('Export')
	);
};
