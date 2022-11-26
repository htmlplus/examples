```css [style]
plus-click-outside {
  display: inline-block;
  position: relative;
}
#menu {
  border: solid 1px gray;
  position: absolute;
  top: calc(100% + 0.25rem);
  padding: 10px;
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
      <plus-click-outside onPlusClickOutside={() => this.onClickOutside()}>
        <button onClick={() => this.onClick()}>
          Open Menu Dropdown
        </button>
        {this.open && (
          <div>
            Click me, I will stay visible until you click outside.
          </div>
        )}
      </plus-click-outside>
    );
  }
}
```

```html [javascript:template]
<plus-click-outside id="outside">
  <button id="button">Open Menu Dropdown</button>
  <div id="menu" hidden>Click me, I will stay visible until you click outside.</div>
</plus-click-outside>
```

```js [javascript:script]
button.addEventListener('click', () => {
  menu.hidden = !menu.hidden;
});
outside.addEventListener('plus-click-outside', () => {
  menu.hidden = true;
});
```
