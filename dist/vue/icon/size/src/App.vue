<template>
  <plus-center>
    <plus-icon name="home" size="1x"></plus-icon>
    <plus-icon name="home" size="2x"></plus-icon>
    <plus-icon name="home" size="3x"></plus-icon>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/icon.js';
</script>

<style scoped>
  plus-icon {
    margin: 0 1rem;
    vertical-align: middle;
  }
</style>
