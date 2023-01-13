<template>
  <plus-center>
    <plus-format-bytes unit="auto" value="1000"></plus-format-bytes>
    <plus-format-bytes unit="base" value="10000"></plus-format-bytes>
    <plus-format-bytes unit="kilo" value="100000"></plus-format-bytes>
    <plus-format-bytes unit="kilo" value="1000000"></plus-format-bytes>
    <plus-format-bytes unit="kilo" value="10000000"></plus-format-bytes>
    <plus-format-bytes unit="kilo" value="100000000"></plus-format-bytes>
    <plus-format-bytes unit="kilo" value="1000000000"></plus-format-bytes>
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
