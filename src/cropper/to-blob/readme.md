```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class CropperToBlob {
  toBlob() {
    window.cropper3.toCanvas().toBlob((blob) => {
        console.log(blob);
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
  <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg" id="cropper3"></plus-cropper>
</plus-center>
<br />
<plus-center>
  <button id="button3">
    To URL
  </button>
</plus-center>
```

```js [javascript:script]
button3.addEventListener('click', () => {
    cropper3.toCanvas().toBlob((blob) => {
        console.log(blob);
    });
});
```
