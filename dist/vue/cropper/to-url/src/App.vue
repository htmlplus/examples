<template>
  <div>
    <plus-center>
      <plus-cropper
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ref="cropperRef"
      ></plus-cropper>
    </plus-center>
    <br />
    <plus-center>
      <button @click="onClick">To URL</button>
    </plus-center>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/core/center.js';
  import '@htmlplus/core/cropper.js';

  const cropperRef = ref();
  function onClick() {
    cropperRef.value.toCanvas().toBlob((blob) => {
      open(URL.createObjectURL(blob), '_blank');
    });
  }
</script>
