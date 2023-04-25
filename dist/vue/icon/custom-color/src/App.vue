<template>
  <plus-stack gap="2rem">
    <plus-icon name="home" color="primary"></plus-icon>
    <plus-icon name="home" color="secondary"></plus-icon>
    <plus-icon name="home" color="tertiary"></plus-icon>
  </plus-stack>
</template>

<script setup>
  import '@htmlplus/core/icon.js';
  import '@htmlplus/core/stack.js';
</script>

<style scoped>
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
