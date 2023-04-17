```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class AccordionPreventFromToggling {
  ensure(type, event) {
    if (window.confirm(`Are you sure you want to ${type} it?`)) return;
    event.preventDefault();
  }
  render() {
    return (
      <plus-accordion
        summary="Summary"
        onPlusCollapse={(event) => this.ensure('collapse', event)}
        onPlusExpand={(event) => this.ensure('expand', event)}
      >
        <plus-faker></plus-faker>
      </plus-accordion>
    )
  }
}
```

```html [javascript:template]
<plus-accordion summary="Summary" id="element1">
  <plus-faker></plus-faker>
</plus-accordion>
```

```js [javascript:script]
const ensure = (type, event) => {
if (window.confirm(`Are you sure you want to ${type} it?`)) return;
  event.preventDefault();
};
element1.addEventListener('plus-collapse', (event) => ensure('collapse', event));
element1.addEventListener('plus-expand', (event) => ensure('expand', event));
```

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  }
}
```
