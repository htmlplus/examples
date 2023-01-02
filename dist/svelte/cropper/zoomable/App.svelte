<script>
  import '@htmlplus/core/cropper.js';
  import '@htmlplus/core/grid.js';
  import '@htmlplus/core/grid-item.js';
</script>

<plus-grid gutter="md">
  <plus-grid-item xs="12" sm="6">
    <plus-cropper
      zoomable="false"
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    ></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6">
    <plus-cropper
      zoomable="true"
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    ></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6">
    <plus-cropper
      zoomable="touch"
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    ></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6">
    <plus-cropper
      zoomable="wheel"
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    ></plus-cropper>
  </plus-grid-item>
</plus-grid>
