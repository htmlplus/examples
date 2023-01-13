<template>
  <plus-center>
    <plus-format-bytes value="-1000"></plus-format-bytes>
    <plus-format-bytes value="-1000" signed></plus-format-bytes>
    <plus-format-bytes value="0"></plus-format-bytes>
    <plus-format-bytes value="0" signed></plus-format-bytes>
    <plus-format-bytes value="1000"></plus-format-bytes>
    <plus-format-bytes value="1000" signed></plus-format-bytes>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/format-bytes.js';
</script>

<style scoped>
  plus-center {
    flex-direction: column;
  }
</style>
