```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class SignatureSave {
  save(background) {
    const image = new Image();

    image.src = window.signature3.toDataURL('image/svg+xml', background);

    const tab = window.open('', '_blank');

    tab.onload = () => {
      tab.document.write(image.outerHTML);
    }
  }

  render() {
    return (
      <>
        <plus-center>
          <plus-signature id="signature3" background-color="lightgray"></plus-signature>
        </plus-center>
        <br />
        <plus-center>
          <button onClick={() => this.save(true)}>
            Save With Background
          </button>
          &nbsp; &nbsp;
          <button onClick={() => this.save(false)}>
            Save Without Background
          </button>
        </plus-center>
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
<plus-center>
  <button id="button3">
    Save With Background
  </button>
  &nbsp; &nbsp;
  <button id="button4">
    Save Without Background
  </button>
</plus-center>
```

```js [javascript:script]
const save = (background) => {
  const image = new Image();

  image.src = window.signature3.toDataURL('image/svg+xml', background);

  const tab = window.open('', '_blank');

  tab.onload = () => {
    tab.document.write(image.outerHTML);
  }
}
button3.addEventListener('click', () => save(true));
button4.addEventListener('click', () => save(false));
```
