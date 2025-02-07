import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  element: {
    'plus-icon': {
      property: {
        resolver: ({ name }) => {
          const [all, icon, type] = name.match(/^(.*)_(outline|round|sharp)$/);
          const url = `https://cdn.jsdelivr.net/npm/@material-icons/svg/svg/${icon}/${type}.svg`;
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
