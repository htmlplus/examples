<template>
  <plus-center>
    <plus-relative-time value="2020-01-01T00:00:00"></plus-relative-time>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/relative-time.js';
</script>

<style scoped>
  plus-relative-time::part(integer) {
    font-weight: bold;
  }
  plus-relative-time::part(literal) {
    color: gray;
  }
</style>
