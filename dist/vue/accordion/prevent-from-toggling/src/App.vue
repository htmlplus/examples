<template>
  <plus-accordion
    summary="Summary"
    @plus-collapse="ensure('collapse', $event)"
    @plus-expand="ensure('expand', $event)"
  >
    <plus-faker></plus-faker>
  </plus-accordion>
</template>

<script setup>
  import '@htmlplus/core/accordion.js';
  import '@htmlplus/core/faker.js';
  function ensure(type, event) {
    if (window.confirm(`Are you sure you want to ${type} it?`)) return;
    event.preventDefault();
  }
</script>
