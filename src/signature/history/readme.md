```tsx [script]
import { Element, State } from '@htmlplus/element';

@Element()
class SignatureHistory {
  @State()
  canUndo: boolean = false;

  @State()
  canRedo: boolean = false;

  sync() {
    this.canUndo = window.signature2.canUndo();
    this.canRedo = window.signature2.canRedo();
  }

  onUndo() {
    window.signature2.undo();
    this.sync();
  }

  onRedo() {
    window.signature2.redo();
    this.sync();
  }

  onPlusEnd() {
    this.sync();
  }

  render() {
    return (
      <>
        <plus-center>
          <plus-signature
            id="signature2"
            background-color="lightgray"
            onPlusEnd={() => this.onPlusEnd()}
          ></plus-signature>
        </plus-center>
        <br />
        <plus-center>
          <button disabled={!this.canUndo} onClick={() => this.onUndo()}>Undo</button>
          &nbsp; &nbsp;
          <button disabled={!this.canRedo} onClick={() => this.onRedo()}>Redo</button>
        </plus-center>
      </>
    )
  }
}
```

```html [javascript:template]
<plus-center>
  <plus-signature id="signature2" background-color="lightgray"></plus-signature>
</plus-center>
<br />
<plus-center>
  <button id="undo" disabled>Undo</button>
  &nbsp; &nbsp;
  <button id="redo" disabled>Redo</button>
</plus-center>
```

```js [javascript:script]
const sync = () => {
  undo.disabled = !signature2.canUndo();
  redo.disabled = !signature2.canRedo();
}
undo.addEventListener('click', () => {
  signature2.undo();
  sync();
});
redo.addEventListener('click', () => {
  signature2.redo();
  sync();
});
signature2.addEventListener('plus-end', () => {
  sync();
});
```
