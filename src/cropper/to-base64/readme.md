```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class CropperToBase64 {
  toBase64() {
    const image = new Image();

    image.src = window.cropper1.toCanvas().toDataURL();

    const tab = window.open('', '_blank');

    tab.onload = () => {
      tab.document.write(image.outerHTML);
    }
  }

  render() {
    return (
      <>
        <plus-center>
          <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg" id="cropper1"></plus-cropper>
        </plus-center>
        <br />
        <plus-center>
          <button onClick={() => this.toBase64()}>
            Get Base64
          </button>
        </plus-center>
      </>
    )
  }
}
```

```html [javascript:template]
<plus-center>
  <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg" id="cropper1"></plus-cropper>
</plus-center>
<br />
<plus-center>
  <button onclick="toBase64()">
    To Base64
  </button>
</plus-center>
```

```js [javascript:script]
const toBase64 = () => {
  const image = new Image();

  image.src = window.cropper1.toCanvas().toDataURL();

  const tab = window.open('', '_blank');

  tab.onload = () => {
    tab.document.write(image.outerHTML);
  }
}
```
