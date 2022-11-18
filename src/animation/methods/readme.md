```css [style]
button {
  margin: 0 0.5rem;
}
plus-animation {
  background: lightgray;
  width: 100px;
  height: 100px;
  margin: auto;
}
.center {
  text-align: center;
}
```

```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class AnimationMethods {
  render() {
    return (
      <div class="center">
        <plus-animation
          id="element2"
          iterations="3"
          name="fade-out"
        ></plus-animation>
        <br />
        <button onClick={() => window.element2.cancel()}>Cancel</button>
        <button onClick={() => window.element2.finish()}>Finish</button>
        <button onClick={() => window.element2.pause()}>Pause</button>
        <button onClick={() => window.element2.play()}>Play</button>
      </div>
    )
  }
}
```

```html [javascript:template]
<div class="center">
  <plus-animation id="element2" iterations="3" name="fade-out"></plus-animation>
  <br />
  <button onclick="element2.cancel()">Cancel</button>
  <button onclick="element2.finish()">Finish</button>
  <button onclick="element2.pause()">Pause</button>
  <button onclick="element2.play()">Play</button>
</div>
```
