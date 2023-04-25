```tsx [script]
import { Element, State } from '@htmlplus/element';

@Element()
class DialogPrevent {
  ensure(type, event) {
    if (window.confirm(`Are you sure you want to ${type} it?`)) return;
    event.preventDefault();
  }
  render() {
    return (
      <>
        <plus-center>
          <plus-dialog-toggler connector="dialog-prevent">
            Open
          </plus-dialog-toggler>
        </plus-center>
        <plus-dialog
          animation="fade"
          connector="dialog-prevent"
          onPlusOpen={(event) => this.ensure('open', event)}
          onPlusClose={(event) => this.ensure('close', event)}
        >
          <plus-dialog-content>
            <plus-dialog-header>Dialog Title</plus-dialog-header>
            <plus-dialog-body>
              <plus-faker></plus-faker>
            </plus-dialog-body>
            <plus-dialog-footer>
              <plus-dialog-toggler>Close</plus-dialog-toggler>
            </plus-dialog-footer>
          </plus-dialog-content>
        </plus-dialog>
      </>
    );
  }
}
```

```html [javascript:template]
<plus-center>
  <plus-dialog-toggler connector="dialog-prevent"> Open </plus-dialog-toggler>
</plus-center>
<plus-dialog id="element1" animation="fade" connector="dialog-prevent">
  <plus-dialog-content>
    <plus-dialog-header> Dialog Title </plus-dialog-header>
    <plus-dialog-body>
      <plus-faker></plus-faker>
    </plus-dialog-body>
    <plus-dialog-footer>
      <plus-dialog-toggler> Close </plus-dialog-toggler>
    </plus-dialog-footer>
  </plus-dialog-content>
</plus-dialog>
```

```js [javascript:script]
const ensure = (type, event) => {
  if (window.confirm(`Are you sure you want to ${type} it?`)) return;
  event.preventDefault();
};
element1.addEventListener('plus-open', (event) => ensure('open', event));
element1.addEventListener('plus-close', (event) => ensure('close', event));
```

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  }
}
```
