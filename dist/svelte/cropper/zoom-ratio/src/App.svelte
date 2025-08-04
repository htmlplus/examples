<script>
  import '@htmlplus/ui/cropper.js';
</script>

<div class="container">
  <plus-cropper
    zoomable
    zoom-ratio={0.1}
    src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
  ></plus-cropper>
  <plus-cropper
    zoomable
    zoom-ratio={1}
    src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
  ></plus-cropper>
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }
  plus-cropper {
    flex: 1;
    min-width: 15rem;
  }
</style>
