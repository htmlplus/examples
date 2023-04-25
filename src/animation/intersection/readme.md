```css [style]
plus-animation {
  background: lightgray;
  width: 100px;
  height: 100px;
  margin: auto;
}
plus-intersection {
  display: block;
  text-align: center;
  margin: 1000px auto;
}
.container {
  position: relative;
  height: 20rem;
  overflow: auto;
  background-color: whitesmoke;
}
```

```tsx [script]
import { Element, State } from '@htmlplus/element';
import '@htmlplus/core/animation/names/attention-seekers/heart-beat.js';

@Element()
class AnimationIntersection {
  @State()
  run = false;

  onChange(event) {
    this.run = event.detail.isIntersecting;
  }

  render() {
    return (
      <div class="container">
        <plus-intersection onPlusChange={(event) => this.onChange(event)}>
          <plus-animation name="heart-beat" run={run}></plus-animation>
        </plus-intersection>
      </div>
    );
  }
}
```

```html [javascript:template]
<div class="container">
  <plus-intersection id="intersection2">
    <plus-animation id="animation2" name="heart-beat"></plus-animation>
  </plus-intersection>
</div>
```

```js [javascript:script]
import 'https://unpkg.com/@htmlplus/core/animation/names/attention-seekers/heart-beat.js';

intersection2.addEventListener('plus-change', (event) => {
  animation2.run = event.detail.isIntersecting;
});
```

```json [settings]
{
   "dock": true
}
```
