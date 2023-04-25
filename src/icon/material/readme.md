```html [template]
<plus-stack gap="2rem">
  <plus-icon name="home_outline"></plus-icon>
  <plus-icon name="home_round"></plus-icon>
  <plus-icon name="home_sharp"></plus-icon>
</plus-stack>
```

```js [config]
import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  component: {
    'plus-icon': {
      property: {
        resolver: (name, parser) => {
          const [all, icon, type] = name.match(/^(.*)_(outline|round|sharp)$/);

          const url = `https://cdn.jsdelivr.net/npm/@material-icons/svg/svg/${icon}/${type}.svg`;

          return fetch(url)
            .then((response) => response.text())
            .then((raw) => parser(raw))
            .then((svg) => {
              svg.setAttribute('fill', 'currentColor');
              return svg;
            })
        }
      }
    }
  }
})
```

```json [settings]
{
  "isolate": true
}
```
