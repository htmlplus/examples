<template>
  <div>
    <plus-accordion summary="First">
      <plus-faker></plus-faker>
    </plus-accordion>
    <plus-accordion summary="Second">
      <plus-faker></plus-faker>
    </plus-accordion>
    <plus-accordion summary="Third" disabled>
      <plus-faker></plus-faker>
    </plus-accordion>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/accordion.js';
  import '@htmlplus/ui/faker.js';
</script>
