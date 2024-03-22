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
      <button @click="onClick">To Blob</button>
    </plus-center>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/cropper.js';

  const cropperRef = ref();
  function onClick() {
    cropperRef.value.toCanvas().toBlob((blob) => {
      console.log(blob);
    });
  }
</script>
