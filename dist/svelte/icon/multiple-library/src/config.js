import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  element: {
    'plus-icon': {
      property: {
        resolver: ({ name }) => {
          const [library, icon] = name.split('/');
          const references = {
            carbon: `https://cdn.jsdelivr.net/npm/carbon-icons/dist/svg/${icon}.svg`,
            lucide: `https://cdn.jsdelivr.net/npm/lucide-static/icons/${icon}.svg`,
            tabler: `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${icon}.svg`
          };
          const url = references[library];
          return fetch(url).then(async (response) => {
            const body = await response.text();
            if (!response.ok) throw new Error(body);
            return body;
          });
        }
      }
    }
  }
});
