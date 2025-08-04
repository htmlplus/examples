import { faker } from '@faker-js/faker/locale/ja';

import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  elements: {
    'plus-faker': {
      properties: {
        instance: faker
      }
    }
  }
});
