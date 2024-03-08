<template>
  <div>
    <plus-center>
      <plus-signature background-color="lightgray" ref="signatureRef"></plus-signature>
    </plus-center>
    <br />
    <plus-center>
      <button @click="onClick">Clear</button>
    </plus-center>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/core/center.js';
  import '@htmlplus/core/signature.js';

  const signatureRef = ref();
  function onClick() {
    signatureRef.value.value = '';
  }
</script>
