<template>
  <div class="container">
    <div class="grid">
      <plus-cropper
        class="style-1"
        indicator
        mode="crop"
        shape="circle"
        resizer="main"
        resizer-shape="line"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        class="style-2"
        indicator
        mode="crop"
        resizer="both"
        resizer-shape="line"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        class="style-3"
        guides
        indicator
        mode="crop"
        resizer="main"
        resizer-shape="circle"
        shape="circle"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        class="style-4"
        guides
        mode="crop"
        resizer="edge"
        resizer-shape="line"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        class="style-5"
        backdrop
        background
        mode="crop"
        resizer="edge"
        resizer-shape="line"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        class="style-6"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
    </div>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/cropper.js';
  import '@htmlplus/ui/grid-item.js';
  import '@htmlplus/ui/grid.js';
</script>

<style scoped>
  .container {
    container-type: inline-size;
  }

  .grid {
    display: grid;
    align-items: start;
    grid-template: auto / 1fr 1fr;
    gap: 1rem;
  }

  plus-cropper {
    min-width: 0;
  }

  @container (max-width: 500px) {
    .grid {
      grid-template: auto auto / 1fr;
    }
  }

  plus-cropper.style-1 {
    --plus-cropper-resizer-size: 20px;
    --plus-cropper-viewport-opacity: 0;
    --plus-cropper-viewport-style: dashed;
  }
  plus-cropper.style-2 {
    --plus-cropper-indicator-color: #e6f018;
    --plus-cropper-indicator-size: 15px;
    --plus-cropper-indicator-weight: 2px;
    --plus-cropper-resizer-color: black;
    --plus-cropper-resizer-offset: -27px;
    --plus-cropper-resizer-size: 21px;
    --plus-cropper-viewport-color: #e6f018;
  }
  plus-cropper.style-3 {
    --plus-cropper-indicator-color: #5499c7;
    --plus-cropper-guides-color: black;
    --plus-cropper-resizer-color: #5499c7;
    --plus-cropper-resizer-size: 15px;
    --plus-cropper-viewport-color: #5499c7;
    --plus-cropper-viewport-weight: 2px;
  }
  plus-cropper.style-4 {
    --plus-cropper-guides-weight: 2px;
    --plus-cropper-resizer-size: 22px;
    --plus-cropper-resizer-weight: 2px;
    --plus-cropper-viewport-style: dashed;
    --plus-cropper-viewport-weight: 2px;
  }
  plus-cropper.style-5 {
    --plus-cropper-backdrop-color: white;
    --plus-cropper-backdrop-opacity: 0.7;
    --plus-cropper-resizer-color: #a93226;
    --plus-cropper-resizer-size: 20px;
    --plus-cropper-resizer-weight: 3px;
  }
  plus-cropper.style-6 {
    --plus-cropper-viewport-opacity: 0;
    --plus-cropper-viewport-style: dashed;
  }
</style>
