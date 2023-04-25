<template>
  <plus-center>
    <plus-signature
      id="signature3"
      background-color="lightgray"
    ></plus-signature>
  </plus-center>
  <br />
  <plus-stack gap="1rem">
    <button @click="save(true)">Save With Background</button>
    <button @click="save(false)">Save Without Background</button>
  </plus-stack>
</template>

<script setup>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/signature.js';
  import '@htmlplus/core/stack.js';
  function save(background) {
    const image = new Image();
    image.src = window.signature3.toDataURL('image/svg+xml', background);
    const tab = window.open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  }
</script>
