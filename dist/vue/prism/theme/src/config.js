import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  elements: {
    'plus-prism': {
      properties: {
        async resolver({ key, value }) {
          if (key == 'theme') {
            const url = `https://cdn.jsdelivr.net/npm/prismjs/themes/prism-${value}.css`;
            const styles = await fetch(url).then((response) => response.text());
            return styles;
          }
        }
      }
    }
  }
});
