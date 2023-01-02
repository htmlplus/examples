<template>
  <plus-grid gutter="md">
    <plus-grid-item xs="12" sm="6">
      <plus-cropper
        :background="false"
        view="none"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
    </plus-grid-item>
    <plus-grid-item xs="12" sm="6">
      <plus-cropper
        :background="true"
        view="none"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
    </plus-grid-item>
  </plus-grid>
</template>

<script setup>
  import '@htmlplus/core/cropper.js';
  import '@htmlplus/core/grid.js';
  import '@htmlplus/core/grid-item.js';
</script>
