import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  element: {
    'plus-icon': {
      property: {
        resolver: async (name, parser) => {
          // From local
          // return import(`./assets/icons/${name}.svg`).then((module) => module.default);

          // From CDN
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
