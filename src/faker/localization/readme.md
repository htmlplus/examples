```html [template]
<plus-faker></plus-faker>
```

```js [config]
import { setConfig } from '@htmlplus/core/config.js';
import { faker } from '@faker-js/faker/locale/ja';

setConfig({
  component: {
    'plus-faker': {
      property: {
        instance: faker
      }
    }
  }
});
```

```json [dependencies]
{
    "@faker-js/faker": "latest"
}
```
