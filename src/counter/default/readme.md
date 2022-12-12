```css [style]
.center {
  text-align: center;
}
button {
  margin: 1rem 0.5rem;
}
```

```tsx [script]
import { Element, State } from '@htmlplus/element';

@Element()
class CounterDefault {
  @State()
  play = false;
  render() {
    return (
      <div class="center">
        <plus-counter
          duration="2000"
          from="10000"
          to="50000"
          separator=","
          play={this.play}
          onPlusComplete={() => this.play = false}
        ></plus-counter>
        <br />
        <button onClick={() => this.play = true}>Start</button>
      </div>
    );
  }
}
```

```html [javascript:template]
<div class="center">
    <plus-counter
      id="counter1"
      duration="2000"
      from="10000"
      to="50000"
      separator=","
    ></plus-counter>
    <br />
    <button id="button1">Start</button>
</div>
```

```js [javascript:script]
button1.addEventListener('click', () => {
  counter1.play = true;
});
```
