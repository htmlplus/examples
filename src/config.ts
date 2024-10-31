import { capitalCase, pascalCase } from 'change-case';
import * as glob from 'glob';
import path from 'node:path';

import { angular, initialize, javascript, json, react, svelte, vue } from '@/plugins';
import { IContext } from '@/types';
import { IImportResolverFunction } from '@/utils';

// const SOURCE = './src/development/*.html';
// const TARGET = './src/development/dist';

const SOURCE = '../ui/src/elements/*/examples/*.html';
const TARGET = './dist';

const CDN = 'https://esm.run/';

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
    return path.join(TARGET, key, getElementName(context), context.fileName);
  };
};

const eventResolver = (key: string) => {
  return (name: string) => {
    if (key == 'react') {
      return pascalCase(name);
    }
    return name;
  };
};

const getElementName = (context: IContext) => {
  return path.basename(path.dirname(context.directoryPath));
};

const importResolver = (key: string): IImportResolverFunction => {
  return (parameters) => {
    parameters.source = parameters.source.replace(CDN, '');

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
    cache: 'dist/.cache',
    dependencyResolver(source) {
      return {
        name: source.replace(CDN, '').split('/').slice(0, 2).join('/'),
        version: 'latest'
      };
    },
    getTitle(context: IContext) {
      return `${capitalCase(getElementName(context))} | ${capitalCase(context.fileName)}`;
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
  react({
    destination: destination('react'),
    eventResolver: eventResolver('react'),
    importResolver: importResolver('react'),
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
    plugins: ['angular', 'javascript', 'react', 'svelte', 'vue'],
    keyResolver(plugin, context) {
      return `${plugin}/${getElementName(context)}/${context.fileName}`;
    }
  })
];
