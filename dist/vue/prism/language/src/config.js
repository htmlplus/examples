import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  element: {
    'plus-prism': {
      property: {
        async resolver({ key, value }) {
          if (key == 'language') {
            await import(`https://esm.run/prismjs/components/prism-${value}.js`);
          }
        }
      }
    }
  }
});
