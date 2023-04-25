<template>
  <div>
    <plus-accordion summary="First" :open="open == 1" @plus-expand="expand(1)">
      <plus-faker></plus-faker>
    </plus-accordion>
    <plus-accordion summary="Second" :open="open == 2" @plus-expand="expand(2)">
      <plus-faker></plus-faker>
    </plus-accordion>
    <plus-accordion summary="Third" :open="open == 3" @plus-expand="expand(3)">
      <plus-faker></plus-faker>
    </plus-accordion>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import '@htmlplus/core/accordion.js';
  import '@htmlplus/core/faker.js';
  const open = ref(1);
  function expand(value) {
    open.value = value;
  }
</script>
