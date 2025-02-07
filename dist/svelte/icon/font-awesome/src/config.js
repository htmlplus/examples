import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  element: {
    'plus-icon': {
      property: {
        resolver: ({ name }) => {
          let category = 'regular';
          if (name.startsWith('fas-')) category = 'solid';
          if (name.startsWith('fab-')) category = 'brands';
          name = name.replace(/^fa[rbs]-/, '');
          const url = `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/${category}/${name}.svg`;
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
