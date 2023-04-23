import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  asset: {
    animation: {
      'custom-pulse': [
        { offset: 0, opacity: '0.6', transform: 'scale(1.00)' },
        { offset: 1, opacity: '0.0', transform: 'scale(1.60)' }
      ]
    }
  }
});