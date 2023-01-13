<template>
  <plus-center>
    <plus-format-bytes
      value="10000100"
      locale="en"
      unit="kilo"
    ></plus-format-bytes>
    <plus-format-bytes
      value="10000100"
      locale="de"
      unit="kilo"
    ></plus-format-bytes>
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
