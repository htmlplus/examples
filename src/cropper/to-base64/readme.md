```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class CropperToBase64 {
  toBase64() {
    const image = new Image();

    image.src = window.cropper2.toCanvas().toDataURL();

    const tab = window.open('', '_blank');

    tab.onload = () => {
      tab.document.write(image.outerHTML);
    }
  }

  render() {
    return (
      <>
        <plus-center>
          <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg" id="cropper2"></plus-cropper>
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
  <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg" id="cropper2"></plus-cropper>
</plus-center>
<br />
<plus-center>
  <button id="button2">
    To Base64
  </button>
</plus-center>
```

```js [javascript:script]
button2.addEventListener('click', () => {
  const image = new Image();

  image.src = cropper2.toCanvas().toDataURL();

  const tab = open('', '_blank');

  tab.onload = () => {
    tab.document.write(image.outerHTML);
  }
});
```
