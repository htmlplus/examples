```css [style]
plus-icon {
  margin: 0 1rem;
}
```

```html [template]
<plus-center>
  <plus-icon name="carbon/user"></plus-icon>
  <plus-icon name="lucide/user"></plus-icon>
  <plus-icon name="tabler/user"></plus-icon>
</plus-center>
```

```js [config]
import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  component: {
    'plus-icon': {
      property: {
        resolver: (name) => {
          const [library, icon] = name.split('/');

          const references = {
            carbon: `https://cdn.jsdelivr.net/npm/carbon-icons/dist/svg/${icon}.svg`,
            lucide: `https://cdn.jsdelivr.net/npm/lucide-static/icons/${icon}.svg`,
            tabler: `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${icon}.svg`,
          }

          const url = references[library];

          return fetch(url)
            .then((response) => response.text())
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
