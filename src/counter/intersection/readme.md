```css [style]
plus-intersection {
  display: block;
  text-align: center;
  margin: 25rem auto;
}
.container {
  position: relative;
  height: 20rem;
  overflow: auto;
  background-color: #eeeeee;
}
```

```tsx [script] [dock]
import { Element, State } from '@htmlplus/element';

@Element()
class CounterIntersection {
  @State()
  play = false;

  onChange(event) {
    this.play = event.detail.isIntersecting;
  }

  render() {
    return (
      <div class="container">
        <plus-intersection onPlusChange={(event) => this.onChange(event)}>
            <plus-counter to="50000" play={this.play}></plus-counter>
         </plus-intersection>
      </div>
    );
  }
}
```

```html [javascript:template]
<div class="container">
  <plus-intersection id="intersection1">
    <plus-counter id="counter1" to="50000"></plus-counter>
  </plus-intersection>
</div>
```

```js [javascript:script]
intersection1.addEventListener('plus-change', (event) => {
  counter1.play = event.detail.isIntersecting;
});
```
