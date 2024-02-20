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
    gap: 1rem;
    color: rgb(238, 110, 115);
    margin: 1rem 0;
  }
  plus-divider::part(line) {
    border-color: rgba(238, 110, 115, 0.25);
  }
</style>
