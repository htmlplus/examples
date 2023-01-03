```css [style]
button {
  margin: 0 0.5rem;
}
plus-animation {
  background: lightgray;
  width: 100px;
  height: 100px;
}
```

```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class AnimationMethods {
  render() {
    return (
      <>
        <plus-center>
          <plus-animation
            id="animation4"
            iterations="3"
            name="fade-out"
          ></plus-animation>
        </plus-center>
        <br />
        <plus-center>
          <button onClick={() => window.animation4.cancel()}>Cancel</button>
          <button onClick={() => window.animation4.finish()}>Finish</button>
          <button onClick={() => window.animation4.pause()}>Pause</button>
          <button onClick={() => window.animation4.play()}>Play</button>
        </plus-center>
      </>
    )
  }
}
```

```html [javascript:template]
<plus-center>
  <plus-animation id="animation4" iterations="3" name="fade-out"></plus-animation>
</plus-center>
<br />
<plus-center>
  <button onclick="animation4.cancel()">Cancel</button>
  <button onclick="animation4.finish()">Finish</button>
  <button onclick="animation4.pause()">Pause</button>
  <button onclick="animation4.play()">Play</button>
</plus-center>
```
