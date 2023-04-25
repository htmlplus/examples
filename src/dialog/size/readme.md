```tsx [script]
import { Element, State } from '@htmlplus/element';

@Element()
class DialogSize {
  @State()
  open = false;

  @State()
  size = 'md';

  hide() {
    this.open = false;
  }

  show(size) {
    this.size = size;
    this.open = true;
  }

  render() {
    return (
      <>
        <plus-stack gap="1rem">
          <button onClick={() => this.show('sm')}>Small dialog</button>
          <button onClick={() => this.show('lg')}>Large dialog</button>
          <button onClick={() => this.show('xl')}>Extra large dialog</button>
        </plus-stack>
        <plus-dialog
          animation="fade"
          open={this.open}
          size={this.size}
          onPlusClose={() => this.hide()}
        >
          <plus-dialog-content>
            <plus-dialog-header>Dialog Title</plus-dialog-header>
            <plus-dialog-body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </plus-dialog-body>
            <plus-dialog-footer>
              <button onClick={() => this.hide()}>Close</button>
            </plus-dialog-footer>
          </plus-dialog-content>
        </plus-dialog>
      </>
    );
  }
}
```

```html [javascript:template]
<plus-stack gap="1rem">
  <button id="element1">Small dialog</button>
  <button id="element2">Large dialog</button>
  <button id="element3">Extra large dialog</button>
</plus-stack>
<plus-dialog id="element4" animation="fade">
  <plus-dialog-content>
    <plus-dialog-header> Dialog Title </plus-dialog-header>
    <plus-dialog-body>
      <plus-faker></plus-faker>
    </plus-dialog-body>
    <plus-dialog-footer>
      <button id="element5">Close</button>
    </plus-dialog-footer>
  </plus-dialog-content>
</plus-dialog>
```

```js [javascript:script]
const hide = () => {
  element4.open = false;
};
const show = (size) => {
  element4.size = size;
  element4.open = true;
};
element1.addEventListener('click', (event) => show('sm'));
element2.addEventListener('click', (event) => show('md'));
element3.addEventListener('click', (event) => show('lg'));
element4.addEventListener('plus-close', () => hide());
element5.addEventListener('click', () => hide());
```

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  }
}
```
