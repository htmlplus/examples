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
      <button @click="onClick">To Base64</button>
    </plus-center>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/core/center.js';
  import '@htmlplus/core/cropper.js';

  const cropperRef = ref();
  function onClick() {
    const image = new Image();
    image.src = cropperRef.value.toCanvas().toDataURL();
    const tab = open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  }
</script>
