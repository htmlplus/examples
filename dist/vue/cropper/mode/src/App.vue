<template>
  <plus-grid gutter="md">
    <plus-grid-item xs="12" sm="6">
      <plus-cropper
        mode="move"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        view="none"
      ></plus-cropper>
    </plus-grid-item>
    <plus-grid-item xs="12" sm="6">
      <plus-cropper
        mode="crop"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
    </plus-grid-item>
  </plus-grid>
</template>

<script setup>
  import '@htmlplus/ui/cropper.js';
  import '@htmlplus/ui/grid-item.js';
  import '@htmlplus/ui/grid.js';
</script>

<style scoped>
  plus-cropper {
    height: 18rem;
  }
</style>
