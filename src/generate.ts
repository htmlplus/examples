import { IContext } from '@/types';

import { files, plugins } from './config';

const contexts: IContext[] = [];

(async () => {
  for (const plugin of plugins) {
    await plugin.start?.(contexts);
  }

  for (const file of files) {
    let context = {
      file: {
        path: file
      }
    } as any;

    contexts.push(context);

    for (const plugin of plugins) {
      try {
        context = (await plugin.run?.(context, contexts)) || context;
      } catch (error) {
        console.log(file);
        console.error(error);
      }

      let index = contexts.findIndex((current) => {
        return current.file?.path == context.file?.path;
      });

      contexts.splice(index, 1, context);
    }
  }

  for (const plugin of plugins) {
    await plugin.finish?.(contexts);
  }
})();
