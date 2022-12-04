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
            id="element2"
            iterations="3"
            name="fade-out"
          ></plus-animation>
        </plus-center>
        <br />
        <plus-center>
          <button onClick={() => window.element2.cancel()}>Cancel</button>
          <button onClick={() => window.element2.finish()}>Finish</button>
          <button onClick={() => window.element2.pause()}>Pause</button>
          <button onClick={() => window.element2.play()}>Play</button>
        </plus-center>
      </>
    )
  }
}
```

```html [javascript:template]
<plus-center>
  <plus-animation id="element2" iterations="3" name="fade-out"></plus-animation>
</plus-center>
<br />
<plus-center>
  <button onclick="element2.cancel()">Cancel</button>
  <button onclick="element2.finish()">Finish</button>
  <button onclick="element2.pause()">Pause</button>
  <button onclick="element2.play()">Play</button>
</plus-center>
```
