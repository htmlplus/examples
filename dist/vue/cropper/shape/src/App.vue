<template>
  <div class="container">
    <div class="grid">
      <plus-cropper
        class="full-height"
        shape="rectangle"
        aspect-ratio="2"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        shape="square"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        shape="circle"
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

  plus-cropper.full-height {
    grid-row: span 2;
    height: 100%;
  }

  @container (max-width: 500px) {
    .grid {
      grid-template: auto auto auto / 1fr;
    }

    plus-cropper.full-height {
      grid-row: auto;
      height: auto;
    }
  }
</style>
