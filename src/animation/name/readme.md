To see all names click [here](/component/animation/names).

```css [style]
plus-animation {
  background: lightgray;
  width: 100px;
  height: 100px;
  margin: auto;
}
```

```tsx [script]
import { Element } from '@htmlplus/element';
import '@htmlplus/core/animation/names/flippers/flip-in-x.js';
import '@htmlplus/core/animation/names/flippers/flip-in-y.js';

@Element()
class AnimationName {
  render() {
    return (
      <plus-grid justify-content="evenly" gutter="md">
        <plus-grid-item xs="12" sm="auto">
          <plus-animation iterations="Infinity" name="flip-in-x" run></plus-animation>
        </plus-grid-item>
        <plus-grid-item xs="12" sm="auto">
          <plus-animation iterations="Infinity" name="flip-in-y" run></plus-animation>
        </plus-grid-item>
      </plus-grid>
    );
  }
}
```

```js [javascript:script]
import 'https://unpkg.com/@htmlplus/core/animation/names/flippers/flip-in-x.js';
import 'https://unpkg.com/@htmlplus/core/animation/names/flippers/flip-in-y.js';
```
