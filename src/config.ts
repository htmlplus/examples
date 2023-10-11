import { capitalCase, pascalCase } from 'change-case';
import * as glob from 'fast-glob';
import path from 'node:path';

import {
  angular,
  initialize,
  javascript,
  json,
  reactDedicated,
  reactExperimental,
  svelte,
  vue
} from '@/plugins';
import { IContext, IContextDependency } from '@/types';
import { IImportResolverFunction } from '@/utils';

// const SOURCE = './development/index.html';
// const TARGET = './development';

const SOURCE = '../core/src/components/*/examples/*.html';
const TARGET = './dist';

const CDN = 'https://cdn.skypack.dev/';

const CUSTOM_ELEMENTS = [
  'aspect-ratio',
  'click-outside',
  'format-bytes',
  'progress-bar',
  'scroll-detector'
];

const CUSTOM_ELEMENTS_ATTRIBUTE_VALUE_STRING = [
  {
    element: 'plus-aspect-ratio',
    attributes: ['value']
  },
  {
    element: 'plus-avatar',
    attributes: ['size']
  },
  {
    element: 'plus-cropper',
    attributes: ['aspect-ratio']
  },
  {
    element: 'plus-grid',
    attributes: ['*']
  },
  {
    element: 'plus-grid-item',
    attributes: ['*']
  },
  {
    element: 'plus-icon',
    attributes: ['size']
  }
];

const destination = (key: string) => {
  return (context: IContext) => {
    return path.join(TARGET, key, getComponentName(context), context.file.name);
  };
};

const eventResolver = (key: string) => {
  return (name: string) => {
    if (key == 'react-dedicated') {
      return pascalCase(name.replace('plus-', ''));
    }
    return name;
  };
};

const getComponentName = (context: IContext) => {
  return path.basename(path.dirname(context.directory.path));
};

const importResolver = (key: string): IImportResolverFunction => {
  return (parameters) => {
    if (key != 'javascript') {
      parameters.source = parameters.source.replace(CDN, '');
    }

    // TODO
    if (key == 'react-dedicated') {
      const [, matched] = parameters.source.match(/^@htmlplus\/core\/([^/]+)\.js$/) || [];
      if (matched && matched != 'config') {
        if (!CUSTOM_ELEMENTS.includes(matched) && matched.includes('-')) return null;
        parameters.source = '@htmlplus/react';
        parameters.specifiers = [
          {
            imported: pascalCase(matched),
            local: pascalCase(matched)
          }
        ];
      }
    }

    if (
      parameters.default ||
      parameters.namespace ||
      parameters.specifiers?.length ||
      parameters.source.includes('@htmlplus/')
    )
      return parameters;

    return null;
  };
};

const isStringAttribute = (element: string, name: string): boolean => {
  return CUSTOM_ELEMENTS_ATTRIBUTE_VALUE_STRING.some(
    (item) =>
      item.element == element && (item.attributes.includes(name) || item.attributes.includes('*'))
  );
};

export const files = glob.sync(SOURCE);

export const plugins = [
  initialize({
    dependencyResolver(source) {
      return {
        name: source.replace(CDN, '').split('/').slice(0, 2).join('/'),
        version: 'latest'
      };
    },
    getTitle(context: IContext) {
      return `${capitalCase(getComponentName(context))} | ${capitalCase(context.file.name)}`;
    }
  }),
  angular({
    destination: destination('angular'),
    eventResolver: eventResolver('angular'),
    importResolver: importResolver('angular'),
    isStringAttribute
  }),
  javascript({
    destination: destination('javascript'),
    importResolver: importResolver('javascript')
  }),
  reactDedicated({
    destination: destination('react-dedicated'),
    eventResolver: eventResolver('react-dedicated'),
    importResolver: importResolver('react-dedicated'),
    isStringAttribute,

    // TODO
    customElementNameResolver(name) {
      const exception = CUSTOM_ELEMENTS.find((exception) => name.includes(exception));

      if (exception) {
        name = name.replace(exception, pascalCase(exception));
      }

      return name
        .replace('plus-', '')
        .split('-')
        .map((section) => pascalCase(section))
        .join('.');
    },
    dependencies(dependencies: IContextDependency[]) {
      return dependencies.map((dependency) => Object.assign(
        {},
        dependency,
        {
          name: dependency.name.replace('@htmlplus/core', '@htmlplus/react')
        }
      ))
    }
  }),
  reactExperimental({
    destination: destination('react-experimental'),
    eventResolver: eventResolver('react-experimental'),
    importResolver: importResolver('react-experimental'),
    isStringAttribute
  }),
  svelte({
    destination: destination('svelte'),
    eventResolver: eventResolver('svelte'),
    importResolver: importResolver('svelte'),
    isStringAttribute
  }),
  vue({
    destination: destination('vue'),
    eventResolver: eventResolver('vue'),
    importResolver: importResolver('vue'),
    isStringAttribute
  }),
  json({
    destination: 'dist/db.json',
    plugins: ['angular', 'javascript', 'react-dedicated', 'react-experimental', 'svelte', 'vue'],
    keyResolver(plugin, context) {
      return `${plugin}/${getComponentName(context)}/${context.file.name}`;
    }
  })
];
