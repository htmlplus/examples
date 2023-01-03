```css [style]
plus-card {
  position: absolute;
  top: calc(100% + 0.25rem);
}
plus-click-outside {
  display: inline-block;
  position: relative;
}
```

```tsx [script]
import { Element, State } from '@htmlplus/element';

@Element()
class ClickOutsideDefault {
  @State()
  open = false;

  onClick() {
    this.open = !this.open;
  }

  onClickOutside() {
    this.open = false;
  }

  render() {
    return (
      <plus-center>
        <plus-click-outside onPlusClickOutside={() => this.onClickOutside()}>
          <button onClick={() => this.onClick()}>
            Open Menu Dropdown
          </button>
          {this.open && (
            <plus-card elevation="10" outlined>
              <plus-card-body>
                It will stay visible until you click outside.
              </plus-card-body>
            </plus-card>
          )}
        </plus-click-outside>
      </plus-center>
    )
  }
}
```

```html [javascript:template]
<plus-center>
  <plus-click-outside id="clickOutside2">
    <button id="button2">Open Menu Dropdown</button>
    <plus-card elevation="10" id="menu2" outlined>
      <plus-card-body>
        It will stay visible until you click outside.
      </plus-card-body>
    </plus-card>
  </plus-click-outside>
</plus-center>
```

```js [javascript:script]
button2.addEventListener('click', () => {
  menu2.hidden = !menu2.hidden;
});
clickOutside2.addEventListener('plus-click-outside', () => {
  menu2.hidden = true;
});
```
