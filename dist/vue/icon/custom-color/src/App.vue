<template>
  <plus-center>
    <plus-icon name="home" color="primary"></plus-icon>
    <plus-icon name="home" color="secondary"></plus-icon>
    <plus-icon name="home" color="tertiary"></plus-icon>
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
  [color='primary'] {
    color: #ff5449;
  }
  [color='secondary'] {
    color: #08dfc8;
  }
  [color='tertiary'] {
    color: #5f9ee9;
  }
</style>
