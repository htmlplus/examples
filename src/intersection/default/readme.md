```css [style]
.container {
  background-color: whitesmoke;
  height: 20rem;
  overflow: auto;
}

.status {
  color: white;
  background-color: black;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
}

plus-card {
  width: 15rem;
  margin: auto;
}

plus-intersection {
  display: block;
  margin: 40rem auto;
}
```

```tsx [script]
import { Element, State } from '@htmlplus/element';

@Element()
class IntersectionDefault {
  @State()
  intersecting = false;

  onChange(event) {
    this.intersecting = event.detail.isIntersecting;
  }

  render() {
    return (
      <div class="container">
        <plus-sticky top="1rem" z-index="1">
          <plus-center>
            <div class="status">
              {this.intersecting ? 'In Viewport' : 'Out of Viewport'}
            </div>
          </plus-center>
        </plus-sticky>
        <plus-intersection onPlusChange={(event) => this.onChange(event)}>
          <plus-card elevation="10">
            <plus-card-body>
              <plus-faker></plus-faker>
            </plus-card-body>
          </plus-card>
        </plus-intersection>
      </div>
    );
  }
}
```

```html [javascript:template]
<div class="container">
  <plus-sticky top="1rem" z-index="1">
    <plus-center>
      <div id="status" class="status"></div>
    </plus-center>
  </plus-sticky>
  <plus-intersection id="intersection1">
    <plus-card elevation="10">
      <plus-card-body>
        <plus-faker></plus-faker>
      </plus-card-body>
    </plus-card>
  </plus-intersection>
</div>
```

```js [javascript:script]
intersection1.addEventListener('plus-change', (event) => {
  status.innerHTML = event.detail.isIntersecting
    ? 'In Viewport'
    : 'Out of Viewport';
});
```

```json [settings]
{
  "dock": true
}
```
