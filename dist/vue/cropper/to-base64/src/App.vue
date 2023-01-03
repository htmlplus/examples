<template>
  <plus-center>
    <plus-cropper
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      id="cropper2"
    ></plus-cropper>
  </plus-center>
  <br />
  <plus-center>
    <button @click="toBase64()">Get Base64</button>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/cropper.js';
  function toBase64() {
    const image = new Image();
    image.src = window.cropper2.toCanvas().toDataURL();
    const tab = window.open('', '_blank');
    tab.onload = () => {
      tab.document.write(image.outerHTML);
    };
  }
</script>
