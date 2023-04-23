<template>
  <plus-center>
    <plus-icon name="home" rotate="0"></plus-icon>
    <plus-icon name="home" rotate="90"></plus-icon>
    <plus-icon name="home" rotate="180"></plus-icon>
    <plus-icon name="home" rotate="270"></plus-icon>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/icon.js';
</script>

<style scoped>
  plus-icon {
    margin: 0 1rem;
  }
</style>
