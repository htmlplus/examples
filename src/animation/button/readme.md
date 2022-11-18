```css [style]
.center {
  text-align: center;
}
plus-animation {
  display: inline-block;
}
```

```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class AnimationButton {
  render() {
    return (
      <div class="center">
        <plus-animation id="animation1" name="tada">
          <button onClick={() => window.animation1.run = true}>Click Me</button>
        </plus-animation>
      </div>
    )
  }
}
```

```html [javascript:template]
<div class="center">
  <plus-animation id="animation1" name="tada">
    <button id="button1">Click Me</button>
  </plus-animation>
</div>
```

```js [javascript:script]
button1.addEventListener('click', () => {
  animation1.run = true;
});
```
