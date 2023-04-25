```html [template]
<plus-stack gap="2rem">
  <plus-icon name="far-user"></plus-icon>
  <plus-icon name="fas-user"></plus-icon>
  <plus-icon name="fab-apple"></plus-icon>
</plus-stack>
```

```js [config]
import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  component: {
    'plus-icon': {
      property: {
        resolver: async (name, parser) => {
          let category = 'regular';

          if (name.startsWith('fas-')) category = 'solid';
          if (name.startsWith('fab-')) category = 'brands';

          name = name.replace(/^fa[rbs]-/, '');

          const url = `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/${category}/${name}.svg`;

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
