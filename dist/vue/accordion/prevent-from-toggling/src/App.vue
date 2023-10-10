<template>
  <plus-accordion summary="Summary" @plus-collapse="onPlusCollapse" @plus-expand="onPlusExpand">
    <plus-faker></plus-faker>
  </plus-accordion>
</template>

<script setup>
  import '@htmlplus/core/accordion.js';
  import '@htmlplus/core/faker.js';

  function onPlusCollapse(event) {
    if (confirm('Are you sure you want to collapse it?')) return;
    event.preventDefault();
  }
  function onPlusExpand(event) {
    if (confirm('Are you sure you want to expand it?')) return;
    event.preventDefault();
  }
</script>
