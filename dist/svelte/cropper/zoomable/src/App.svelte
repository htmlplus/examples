<script>
  import '@htmlplus/ui/cropper.js';
</script>

<div class="container">
  <div class="container">
    <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"></plus-cropper>
    <plus-cropper zoomable src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    ></plus-cropper>
  </div>
  <div class="container">
    <plus-cropper zoomable="touch" src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    ></plus-cropper>
    <plus-cropper zoomable="wheel" src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    ></plus-cropper>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }
  plus-cropper {
    flex: 1;
    min-width: 15rem;
  }
</style>
