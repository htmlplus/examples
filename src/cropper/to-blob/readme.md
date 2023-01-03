```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class CropperToBlob {
  toBlob() {
    window.cropper2.toCanvas().toBlob((blob) => {
        console.log(blob);
    });
  }

  render() {
    return (
      <>
        <plus-center>
          <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg" id="cropper2"></plus-cropper>
        </plus-center>
        <br />
        <plus-center>
          <button onClick={() => this.toBlob()}>
            To Blob
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
  <button onclick="toBlob()">
    To URL
  </button>
</plus-center>
```

```js [javascript:script]
const toBlob = () => {
    window.cropper2.toCanvas().toBlob((blob) => {
        console.log(blob);
    });
}
```
