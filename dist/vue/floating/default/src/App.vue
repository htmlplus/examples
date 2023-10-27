<template>
  <div style="position: relative">
    <plus-faker api="lorem.paragraphs"></plus-faker>
    <plus-floating>
      <plus-icon name="circle-fill"></plus-icon>
    </plus-floating>
  </div>
</template>

<script setup>
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/floating.js';
  import '@htmlplus/core/icon.js';
</script>
