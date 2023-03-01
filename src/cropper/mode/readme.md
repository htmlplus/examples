```css [style]
plus-cropper {
  height: 18rem;
}
```

```html [template]
<plus-grid gutter="md">
  <plus-grid-item xs="12" sm="6">
    <plus-cropper mode="move" src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg" view="none"></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6">
    <plus-cropper mode="crop" src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"></plus-cropper>
  </plus-grid-item>
</plus-grid>
```

```json [settings]
{
  "dependencies": {
    "cropperjs": "latest"
  }
}
```
