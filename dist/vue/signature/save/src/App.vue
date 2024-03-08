<template>
  <div>
    <plus-center>
      <plus-signature background-color="lightgray" ref="signatureRef"></plus-signature>
    </plus-center>
    <br />
    <plus-center>
      <button @click="onClick">Save</button>
    </plus-center>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/core/center.js';
  import '@htmlplus/core/signature.js';

  const signatureRef = ref();
  function onClick() {
    const tab = open('', '_blank');
    setTimeout(() => {
      tab.document.write(signatureRef.value.value);
    }, 250);
  }
</script>
