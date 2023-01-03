```css [style]
.root {
  padding: 5rem 0;
  position: relative;
}
plus-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1rem;
  height: 1rem;
  border: solid 1px red;
  transform-origin: top left;
}
```

```tsx [script]
import { Element } from "@htmlplus/element";

@Element()
class AnimationKeyframes {
  keyframes = [
    {
      transform: "scale(0) rotate(0deg) translate(-50%, -50%)",
      opacity: "1",
    },
    {
      transform: "scale(7) rotate(960deg) translate(-50%, -50%)",
      opacity: "0",
    },
  ];
  render() {
    return (
      <div class="root">
        <plus-animation
          duration="5000"
          iterations="Infinity"
          keyframes={this.keyframes}
          run
        ></plus-animation>
      </div>
    )
  }
}
```

```html [javascript:template]
<div class="root">
  <plus-animation
    duration="5000"
    id="animation3"
    iterations="Infinity"
    run
  ></plus-animation>
</div>
```

```js [javascript:script]
setTimeout(() => {
  animation3.keyframes = [
    {
      transform: "scale(0) rotate(0deg) translate(-50%, -50%)",
      opacity: "1",
    },
    {
      transform: "scale(7) rotate(960deg) translate(-50%, -50%)",
      opacity: "0",
    },
  ];
  animation3.run = true;
}, 1000);
```
