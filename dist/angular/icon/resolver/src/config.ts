import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  element: {
    'plus-icon': {
      property: {
        resolver: async (name, parser) => {
          return fetch(`https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${name}.svg`)
            .then((response) => response.text())
            .then((raw) => parser(raw))
            .then((svg) => {
              svg.setAttribute('fill', 'currentColor');
              return svg;
            });
        }
      }
    }
  }
});
