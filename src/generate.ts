import type { IContext } from '@/types';

import { files, plugins } from './config';

const contexts: IContext[] = [];

(async () => {
	for (const plugin of plugins) {
		await plugin.start?.(contexts);
	}

	for (const file of files) {
		let context: IContext = {
			filePath: file
		} as any;

		contexts.push(context);

		for (const plugin of plugins) {
			try {
				context = (await plugin.run?.(context, contexts)) || context;
			} catch (error) {
				console.log(file);
				console.error(error);
			}

			const index = contexts.findIndex((current) => {
				return current.filePath === context.filePath;
			});

			contexts.splice(index, 1, context);
		}
	}

	for (const plugin of plugins) {
		await plugin.finish?.(contexts);
	}
})();
