import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  component: {
    'plus-animation': {
      asset: {
        name: {
          'custom-pulse': [
            { offset: 0, opacity: '0.6', transform: 'scale(1.0)' },
            { offset: 1, opacity: '0.0', transform: 'scale(1.5)' }
          ]
        }
      }
    }
  }
});