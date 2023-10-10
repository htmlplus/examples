<template>
  <div>
    <plus-center>
      <plus-signature background-color="lightgray" ref="signatureRef"></plus-signature>
    </plus-center>
    <br />
    <plus-stack gap="1rem">
      <button @click="save(true)">Save With Background</button>
      <button @click="save(false)">Save Without Background</button>
    </plus-stack>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/core/center.js';
  import '@htmlplus/core/signature.js';
  import '@htmlplus/core/stack.js';

  const signatureRef = ref();
  const save = (background) => {
    const image = new Image();
    image.src = signatureRef.value.toDataURL('image/svg+xml', background);
    const tab = open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  };
</script>
