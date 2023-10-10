import merge from 'deepmerge';
import fs from 'node:fs';

import { IContext, IPlugin } from '@/types';

export interface IJsonOptions {
  destination: string;
  plugins: string[];
  keyResolver: (plugin: string, context: IContext) => any;
}

export const json: IPlugin<IJsonOptions> = (options) => {
  const name = 'json';

  const finish = async (contexts: IContext[]) => {
    const outputs = [];

    for (const context of contexts) {
      for (const plugin of options.plugins) {
        const key = options.keyResolver(plugin, context);

        const output = merge({ key, settings: context.settings }, context.output?.[plugin] || {});

        outputs.push(output);
      }
    }

    const content = JSON.stringify(outputs, null, 2);

    fs.writeFileSync(options.destination, content, 'utf8');
  };

  return { name, finish };
};
