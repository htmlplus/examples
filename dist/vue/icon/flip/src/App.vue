<template>
  <plus-center>
    <plus-icon name="home"></plus-icon>
    <plus-icon name="home" flip="horizontal"></plus-icon>
    <plus-icon name="home" flip="vertical"></plus-icon>
    <plus-icon name="home" flip="both"></plus-icon>
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
