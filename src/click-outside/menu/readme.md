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
            <plus-card elevation="10" id="menu" outlined>
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
  <plus-click-outside id="outside">
    <button id="button">Open Menu Dropdown</button>
    <plus-card elevation="10" id="menu" outlined>
      <plus-card-body>
        It will stay visible until you click outside.
      </plus-card-body>
    </plus-card>
  </plus-click-outside>
</plus-center>
```

```js [javascript:script]
button.addEventListener('click', () => {
  menu.hidden = !menu.hidden;
});
outside.addEventListener('plus-click-outside', () => {
  menu.hidden = true;
});
```
