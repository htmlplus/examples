import { faker } from '@faker-js/faker/locale/ja';

import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  element: {
    'plus-faker': {
      property: {
        instance: faker
      }
    }
  }
});
