<template>
  <div class="container">
    <div class="grid">
      <plus-cropper
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        zoomable
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        zoomable="touch"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        zoomable="wheel"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
    </div>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/cropper.js';
</script>

<style scoped>
  .container {
    container-type: inline-size;
  }

  .grid {
    display: grid;
    align-items: start;
    grid-template: auto auto / 1fr 1fr;
    gap: 1rem;
  }

  plus-cropper {
    min-width: 0;
  }

  @container (max-width: 500px) {
    .grid {
      grid-template: auto auto auto auto / 1fr;
    }
  }
</style>
