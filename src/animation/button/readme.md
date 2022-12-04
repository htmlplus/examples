```css [style]
plus-animation {
  display: inline-block;
}
```

```tsx [script]
import { Element } from '@htmlplus/element';
import '@htmlplus/core/animation/names/attention-seekers/tada.js';

@Element()
class AnimationButton {
  render() {
    return (
      <plus-center>
        <plus-animation id="animation1" name="tada">
          <button onClick={() => window.animation1.run = true}>Click Me</button>
        </plus-animation>
      </plus-center>
    )
  }
}
```

```html [javascript:template]
<plus-center>
  <plus-animation id="animation1" name="tada">
    <button id="button1">Click Me</button>
  </plus-animation>
</plus-center>
```

```js [javascript:script]
import 'https://unpkg.com/@htmlplus/core/animation/names/attention-seekers/tada.js';

button1.addEventListener('click', () => {
  animation1.run = true;
});
```
