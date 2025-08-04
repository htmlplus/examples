import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  elements: {
    'plus-prism': {
      properties: {
        async resolver({ key, value }) {
          if (key == 'plugin') {
            await import(`https://esm.run/prismjs/plugins/${value}/prism-${value}.js`);
            try {
              const url = `https://cdn.jsdelivr.net/npm/prismjs/plugins/${value}/prism-${value}.css`;
              const styles = await fetch(url).then((response) => response.text());
              return styles;
            } catch {}
          }
        }
      }
    }
  }
});
