<script>
  import '@htmlplus/ui/cropper.js';
</script>

<div class="container">
  <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"></plus-cropper>
  <plus-cropper transparent src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
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
