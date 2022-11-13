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
  $animation: HTMLElement;
  render() {
    return (
      <div class="center">
        <plus-animation
          ref={($element) => this.$animation = $element}
          name="fade-out"
          iterations="3"
        ></plus-animation>
        <br />
        <button onClick={this.$animation.cancel}>Cancel</button>
        <button onClick={this.$animation.finish}>Finish</button>
        <button onClick={this.$animation.pause}>Pause</button>
        <button onClick={this.$animation.play}>Play</button>
      </div>
    )
  }
}
```

```html [javascript:template]
<div class="center">
  <plus-animation id="element" name="fade-out" iterations="3"></plus-animation>
  <br />
  <button onclick="element.cancel()">Cancel</button>
  <button onclick="element.finish()">Finish</button>
  <button onclick="element.pause()">Pause</button>
  <button onclick="element.play()">Play</button>
</div>
```
