import { compiler } from '@htmlplus/element/compiler/index.js';
import { extract, parse, read } from '@htmlplus/element/compiler/index.js';
import { paramCase, pascalCase } from 'change-case';
import glob from 'fast-glob';
import path from 'path';

import {
  angular,
  document,
  javascript,
  prepare,
  preview,
  react,
  reactExperimental,
  svelte,
  vue
} from './plugins/index.js';

const destination = (context, key) => {
  return path.join('dist', key, path.basename(path.dirname(path.dirname(context.filePath))), context.directoryName);
};

const { start, run, finish } = compiler(
  read(),
  prepare(),
  parse(),
  extract({
    prefix: 'plus'
  }),
  angular({
    componentRefrence(name) {
      return `@htmlplus/core/${name.split('-').slice(1).join('-')}.js`;
    },
    componentNameConvertor(name) {
      return name;
    },
    destination(context) {
      return destination(context, 'angular');
    },
    eventNameConvertor(name) {
      return '(' + paramCase(name).replace('on-', '') + ')';
    }
  }),
  javascript({
    componentRefrence(name) {
      return `https://unpkg.com/@htmlplus/core/${name.split('-').slice(1).join('-')}.js`;
    },
    componentNameConvertor(name) {
      return name;
    },
    destination(context) {
      return destination(context, 'javascript');
    }
  }),
  react({
    componentRefrence() {
      return '@htmlplus/react';
    },
    componentNameConvertor(name) {
      const exceptions = ['aspect-ratio', 'button-navigation', 'click-outside', 'scroll-indicator'];
      const exception = exceptions.find((exception) => name.indexOf(exception) != -1);
      if (exception) name = name.replace(exception, pascalCase(exception));
      return name.replace('plus-', '').split('-').map(pascalCase).join('.');
    },
    destination(context) {
      return destination(context, 'react');
    },
    eventNameConvertor(name) {
      return name.replace('onPlus', 'on');
    }
  }),
  reactExperimental({
    componentRefrence(name) {
      return `@htmlplus/core/${name.split('-').slice(1).join('-')}.js`;
    },
    destination(context) {
      return destination(context, 'react@experimental');
    },
    eventNameConvertor(name) {
      if (name.indexOf('Plus') == -1) return name;
      return paramCase(name).replace('on-', 'on');
    }
  }),
  svelte({
    componentRefrence(name) {
      return `@htmlplus/core/${name.split('-').slice(1).join('-')}.js`;
    },
    componentNameConvertor(name) {
      return name;
    },
    destination(context) {
      return destination(context, 'svelte');
    },
    eventNameConvertor(name) {
      return paramCase(name).replace('-', ':');
    }
  }),
  vue({
    componentRefrence(name) {
      return `@htmlplus/core/${name.split('-').slice(1).join('-')}.js`;
    },
    componentNameConvertor(name) {
      return name;
    },
    destination(context) {
      return destination(context, 'vue');
    },
    eventNameConvertor(name) {
      return paramCase(name).replace('on-', '@');
    }
  }),
  preview(),
  document({
    destination: 'dist/db.json'
  })
);

(async () => {
  await start();
  const files = glob.sync(['./src/*/*/readme.md']);
  for (const file of files) await run(file);
  await finish();
})();
