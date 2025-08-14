import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  elements: {
    'plus-prism': {
      properties: {
        resolver: {
          default: async ({ key, value }) => {
            switch (key) {
              case 'language': {
                await import(`https://esm.run/prismjs/components/prism-${value}.js`);
                break;
              }
              case 'plugin': {
                await import(`https://esm.run/prismjs/plugins/${value}/prism-${value}.js`);
                try {
                  const url = `https://cdn.jsdelivr.net/npm/prismjs/plugins/${value}/prism-${value}.css`;
                  const styles = await fetch(url).then((response) => response.text());
                  return styles;
                } catch {}
                break;
              }
              case 'theme': {
                const url = `https://cdn.jsdelivr.net/npm/prismjs/themes/prism-${value}.css`;
                const styles = await fetch(url).then((response) => response.text());
                return styles;
              }
            }
          }
        }
      }
    }
  }
});
