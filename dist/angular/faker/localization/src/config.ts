import { setConfig } from '@htmlplus/core/config.js';
import { faker } from '@faker-js/faker/locale/ja';

setConfig({
  component: {
    'plus-faker': {
      property: {
        instance: faker
      }
    }
  }
});