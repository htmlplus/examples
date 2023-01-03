<template>
  <plus-center>
    <plus-cropper
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      id="cropper4"
    ></plus-cropper>
  </plus-center>
  <br />
  <plus-center>
    <button @click="toURL()">To URL</button>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/cropper.js';
  function toURL() {
    window.cropper4.toCanvas().toBlob((blob) => {
      window.open(URL.createObjectURL(blob), '_blank');
    });
  }
</script>
