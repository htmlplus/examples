<template>
  <div class="container">
    <plus-cropper
      mode="move"
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      view="none"
    ></plus-cropper>
    <plus-cropper
      mode="crop"
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    ></plus-cropper>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/cropper.js';
</script>

<style scoped>
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
