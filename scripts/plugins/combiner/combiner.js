import fs from 'fs';

import { getOutput } from '../../utils.js';

const COMBINER_OPTIONS = {
  destination: 'all.json',
  plugins: []
};

export const combiner = (options) => {
  const name = 'combiner';

  options = Object.assign({}, COMBINER_OPTIONS, options);

  const finish = (global) => {
    const outputs = [];

    for (const context of global.contexts) {
      const [component, example] = context.directoryPath.split(/[\/|\\]/g).slice(-2);

      for (const plugin of options.plugins) {
        outputs.push({
          plugin,
          component,
          example,
          output: getOutput(plugin, context)
        });
      }
    }

    const raw = JSON.stringify(outputs, null, 2);

    fs.writeFileSync(options.destination, raw, 'utf8');
  };

  return { name, finish };
};
