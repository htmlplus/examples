```css [style]
.container {
  position: relative;
  background-color: #eeeeee;
}

.status {
  color: #fafafa;
  background-color: black;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  z-index: 1;
}

.content {
  height: 20rem;
  overflow: auto;
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

```tsx [script] [dock]
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
        <div class="status">
          {this.intersecting ? 'In Viewport' : 'Out of Viewport'}
        </div>
        <div class="content">
          <plus-intersection onPlusChange={(event) => this.onChange(event)}>
            <plus-card elevation="10">
              <plus-card-body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </plus-card-body>
            </plus-card>
          </plus-intersection>
        </div>
      </div>
    );
  }
}
```

```html [javascript:template]
<div class="container">
  <div id="element1" class="status"></div>
  <div class="content">
    <plus-intersection id="element2">
      <plus-card elevation="10">
        <plus-card-body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </plus-card-body>
      </plus-card>
    </plus-intersection>
  </div>
</div>
```

```js [javascript:script]
element2.addEventListener('plus-change', (event) => {
  element1.innerHTML = event.detail.isIntersecting
    ? 'In Viewport'
    : 'Out of Viewport';
});
```
