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

    const previous = fs.existsSync(options.destination)
      ? (JSON.parse(fs.readFileSync(options.destination)) as [])
      : [];

    for (const context of contexts) {
      for (const plugin of options.plugins) {
        const key = options.keyResolver(plugin, context);

        const current = context.skip ? previous.find((item: any) => item.key == key) : undefined;

        const output =
          current ||
          merge(
            {
              key,
              settings: {
                dock: context.settingsDock,
                isolate: context.settingsIsolate,
                rtl: context.settingsRTL
              },
              description: context.description
            },
            context.output?.[plugin] || {}
          );

        outputs.push(output);
      }
    }

    const content = JSON.stringify(outputs, null, 2);

    fs.writeFileSync(options.destination, content, 'utf8');
  };

  return { name, finish };
};
