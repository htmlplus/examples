<template>
  <plus-grid align-items="center" justify-content="evenly">
    <plus-grid-item xs="5">
      <plus-faker></plus-faker>
    </plus-grid-item>
    <plus-divider vertical></plus-divider>
    <plus-grid-item xs="5">
      <plus-faker></plus-faker>
    </plus-grid-item>
  </plus-grid>
</template>

<script setup>
  import '@htmlplus/core/divider.js';
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/grid.js';
  import '@htmlplus/core/grid-item.js';
</script>

<style scoped>
  plus-divider {
    --plus-divider-color: #5f9ee9;
    --plus-divider-width: 0.5rem;
    margin: 2rem 0;
  }
</style>
