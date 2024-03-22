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

  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/signature.js';

  const signatureRef = ref();
  function onClick() {
    signatureRef.value.value = '';
  }
</script>
