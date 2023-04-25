```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class SignatureSave {
  save(background) {
    const image = new Image();

    image.src = window.signature3.toDataURL('image/svg+xml', background);

    const tab = window.open('', '_blank');

    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  }

  render() {
    return (
      <>
        <plus-center>
          <plus-signature id="signature3" background-color="lightgray"></plus-signature>
        </plus-center>
        <br />
        <plus-stack gap="1rem">
          <button onClick={() => this.save(true)}>
            Save With Background
          </button>
          <button onClick={() => this.save(false)}>
            Save Without Background
          </button>
        </plus-stack>
      </>
    )
  }
}
```

```html [javascript:template]
<plus-center>
  <plus-signature id="signature3" background-color="lightgray"></plus-signature>
</plus-center>
<br />
<plus-stack gap="1rem">
  <button id="save1">
    Save With Background
  </button>
  <button id="save2">
    Save Without Background
  </button>
</plus-stack>
```

```js [javascript:script]
const save = (background) => {
  const image = new Image();

  image.src = window.signature3.toDataURL('image/svg+xml', background);

  const tab = window.open('', '_blank');

  setTimeout(() => {
    tab.document.write(image.outerHTML);
  }, 250);
}
save1.addEventListener('click', () => save(true));
save2.addEventListener('click', () => save(false));
```
