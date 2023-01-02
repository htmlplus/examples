```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class CropperToURL {
  toURL() {
    window.cropper3.toCanvas().toBlob((blob) => {
        window.open(URL.createObjectURL(blob), '_blank');
    });
  }

  render() {
    return (
      <>
        <plus-center>
          <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg" id="cropper3"></plus-cropper>
        </plus-center>
        <br />
        <plus-center>
          <button onClick={() => this.toURL()}>
            To URL
          </button>
        </plus-center>
      </>
    )
  }
}
```

```html [javascript:template]
<plus-center>
  <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg" id="cropper3"></plus-cropper>
</plus-center>
<br />
<plus-center>
  <button onclick="toURL()">
    To URL
  </button>
</plus-center>
```

```js [javascript:script]
const toURL = () => {
    window.cropper3.toCanvas().toBlob((blob) => {
        window.open(URL.createObjectURL(blob), '_blank');
    });
}
```
