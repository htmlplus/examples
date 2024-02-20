<template>
  <div>
    <plus-faker></plus-faker>
    <plus-divider>OR</plus-divider>
    <plus-faker></plus-faker>
  </div>
</template>

<script setup>
  import '@htmlplus/core/divider.js';
  import '@htmlplus/core/faker.js';
</script>

<style scoped>
  plus-divider {
    margin: 1rem 0;
  }
</style>
