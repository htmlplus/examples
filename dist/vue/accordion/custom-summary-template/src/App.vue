<template>
  <plus-accordion>
    <plus-stack slot="summary" justify-content="space-between">
      <b>Summary</b>
      <button>Action</button>
    </plus-stack>
    <plus-faker></plus-faker>
  </plus-accordion>
</template>

<script setup>
  import '@htmlplus/ui/accordion.js';
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/stack.js';
</script>

<style scoped>
  [slot='summary'] {
    flex-grow: 1;
    margin-inline-end: 1rem;
  }
</style>
