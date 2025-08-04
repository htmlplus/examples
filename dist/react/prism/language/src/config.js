import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  elements: {
    'plus-prism': {
      properties: {
        async resolver({ key, value }) {
          if (key == 'language') {
            await import(`https://esm.run/prismjs/components/prism-${value}.js`);
          }
        }
      }
    }
  }
});
