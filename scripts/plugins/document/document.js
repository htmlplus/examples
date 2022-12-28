// TODO
import fs from 'fs';

import { getOutput } from '../../utils.js';

export const document = (options) => {
  const name = 'document';
  const finish = (global) => {
    const outputs = [];
    const plugins = ['angular', 'javascript', 'react', 'react@experimental', 'svelte', 'vue', 'preview'];
    for (const context of global.contexts) {
      const [component, example] = context.directoryPath.split(/[\/|\\]/g).slice(-2);
      for (const plugin of plugins) {
        const output = getOutput(plugin, context);
        outputs.push({
          key: example,
          category: plugin,
          component,
          detail: output
        });
      }
    }
    const raw = JSON.stringify(outputs, null, 2);
    fs.writeFileSync(options?.destination, raw, 'utf8');
  };
  return { name, finish };
};
