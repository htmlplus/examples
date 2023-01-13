<template>
  <plus-center>
    <plus-format-bytes value="1500"></plus-format-bytes>
    <plus-format-bytes value="800000000"></plus-format-bytes>
    <plus-format-bytes value="6900000000"></plus-format-bytes>
    <plus-format-bytes value="222000000000000"></plus-format-bytes>
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
