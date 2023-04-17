<template>
  <plus-accordion>
    <div slot="summary">
      <span>Summary</span>
      <button>Action</button>
    </div>
    <plus-faker></plus-faker>
  </plus-accordion>
</template>

<script setup>
  import '@htmlplus/core/accordion.js';
  import '@htmlplus/core/faker.js';
</script>

<style scoped>
  [slot='summary'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    margin-right: 1rem;
  }
</style>
