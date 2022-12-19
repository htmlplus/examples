<template>
  <plus-center>
    <plus-signature
      id="signature1"
      background-color="lightgray"
    ></plus-signature>
  </plus-center>
  <br />
  <plus-center>
    <button @click="window.signature1.clear()">Clear</button>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/signature.js';
</script>
