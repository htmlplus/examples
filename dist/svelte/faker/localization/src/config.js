import { faker } from '@faker-js/faker/locale/ja';

import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  component: {
    'plus-faker': {
      property: {
        instance: faker
      }
    }
  }
});
