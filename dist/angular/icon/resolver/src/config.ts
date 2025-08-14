import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  elements: {
    'plus-icon': {
      properties: {
        resolver: {
          default: ({ name }) => {
            const url = `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${name}.svg`;
            return fetch(url).then(async (response) => {
              const body = await response.text();
              if (!response.ok) throw new Error(body);
              return body;
            });
          }
        }
      }
    }
  }
});
