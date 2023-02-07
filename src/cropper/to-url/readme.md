```tsx [script]
import { Element } from '@htmlplus/element';

@Element()
class CropperToUrl {
  toURL() {
    window.cropper4.toCanvas().toBlob((blob) => {
        window.open(URL.createObjectURL(blob), '_blank');
    });
  }

  render() {
    return (
      <>
        <plus-center>
          <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg" id="cropper4"></plus-cropper>
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
  <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg" id="cropper4"></plus-cropper>
</plus-center>
<br />
<plus-center>
  <button id="button4">
    To URL
  </button>
</plus-center>
```

```js [javascript:script]
button4.addEventListener('click', () => {
    cropper4.toCanvas().toBlob((blob) => {
        open(URL.createObjectURL(blob), '_blank');
    });
});
```
