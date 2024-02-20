<template>
  <plus-stack>
    <plus-faker></plus-faker>
    <plus-divider vertical>OR</plus-divider>
    <plus-faker></plus-faker>
  </plus-stack>
</template>

<script setup>
  import '@htmlplus/core/divider.js';
  import '@htmlplus/core/faker.js';
</script>

<style scoped>
  plus-divider {
    margin: 0 1rem;
  }
</style>
