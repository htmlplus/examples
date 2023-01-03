<template>
  <plus-center>
    <plus-cropper
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      id="cropper2"
    ></plus-cropper>
  </plus-center>
  <br />
  <plus-center>
    <button @click="toBlob()">To Blob</button>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/cropper.js';
  function toBlob() {
    window.cropper2.toCanvas().toBlob((blob) => {
      console.log(blob);
    });
  }
</script>
