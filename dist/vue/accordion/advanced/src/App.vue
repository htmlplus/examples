<template>
  <plus-accordion>
    <plus-stack slot="summary" justify-content="space-between">
      <span>Summary</span>
      <button>Action</button>
    </plus-stack>
    <plus-faker></plus-faker>
  </plus-accordion>
</template>

<script setup>
  import '@htmlplus/core/accordion.js';
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/stack.js';
</script>

<style scoped>
  [slot='summary'] {
    flex-grow: 1;
    margin-right: 1rem;
  }
</style>
