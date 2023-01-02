<script>
  import '@htmlplus/core/cropper.js';
  import '@htmlplus/core/grid.js';
  import '@htmlplus/core/grid-item.js';
</script>

<plus-grid gutter="md">
  <plus-grid-item xs="12" sm="6">
    <plus-cropper
      zoomable
      zoom-ratio="0.1"
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    ></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6">
    <plus-cropper
      zoomable
      zoom-ratio="1.0"
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    ></plus-cropper>
  </plus-grid-item>
</plus-grid>
