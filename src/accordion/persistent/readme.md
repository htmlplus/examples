```tsx [script]
import { Element, State } from '@htmlplus/element';

@Element()
class AccordionPersistent {
  @State()
  open = 1;

  expand(value) {
    this.open = value;
  }

  render() {
    return (
      <div>
        <plus-accordion
          summary="First"
          open={this.open == 1}
          onPlusExpand={() => this.expand(1)}
        >
          <plus-faker></plus-faker>
        </plus-accordion>
        <plus-accordion
          summary="Second"
          open={this.open == 2}
          onPlusExpand={() => this.expand(2)}
        >
          <plus-faker></plus-faker>
        </plus-accordion>
        <plus-accordion
          summary="Third"
          open={this.open == 3}
          onPlusExpand={() => this.expand(3)}
        >
          <plus-faker></plus-faker>
        </plus-accordion>
      </div>
    )
  }
}
```

```html [javascript:template]
<div id="accordions1">
  <plus-accordion summary="First" open>
    <plus-faker></plus-faker>
  </plus-accordion>
  <plus-accordion summary="Second">
    <plus-faker></plus-faker>
  </plus-accordion>
  <plus-accordion summary="Third">
    <plus-faker></plus-faker>
  </plus-accordion>
</div>
```

```js [javascript:script]
document
  .querySelectorAll('#accordions1 > *')
  .forEach((accordion, index, accordions) => {
    accordion.addEventListener('plus-expand', (event) => {
      accordions.forEach((accordion) => {
        accordion.open = event.target == accordion
      })
    })
  })
```

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  }
}
```
