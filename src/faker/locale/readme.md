```html [template]
<plus-faker locale="de"></plus-faker>
```

```js [config]
import { setConfig } from '@htmlplus/core/config.js';
import { faker } from '@faker-js/faker/locale/de';

setConfig({
  component: {
    'plus-faker': {
        instance: faker
    }
  }
});
```
