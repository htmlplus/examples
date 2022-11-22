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
import '@htmlplus/core/animation/names/fading-exits/fade-out-down.js';

@Element()
class AnimationEasing {
  render() {
    return (
      <>
        <plus-grid justify-content="evenly" gutter="md">
          <plus-grid-item xs="12" sm="auto">
            <plus-animation
              easing="linear"
              iterations="Infinity"
              name="fade-out-down"
              run
            ></plus-animation>
          </plus-grid-item>
          <plus-grid-item xs="12" sm="auto">
            <plus-animation
              easing="ease-in"
              iterations="Infinity"
              name="fade-out-down"
              run
            ></plus-animation>
          </plus-grid-item>
          <plus-grid-item xs="12" sm="auto">
            <plus-animation
              easing="cubic-bezier(0.25, 0.50, 0.25, 0.50)"
              iterations="Infinity"
              name="fade-out-down"
              run
            ></plus-animation>
          </plus-grid-item>
        </plus-grid>
        <br />
        <br />
        <br />
      </>
    );
  }
}
```

```js [javascript:script]
import 'https://unpkg.com/@htmlplus/core/animation/names/fading-exits/fade-out-down.js';
```
