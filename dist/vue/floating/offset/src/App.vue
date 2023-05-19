<template>
  <div>
    <plus-faker api="lorem.paragraphs"></plus-faker>
    <plus-floating :offset="offset">
      <plus-icon name="circle-fill"></plus-icon>
    </plus-floating>
  </div>
</template>

<script setup>
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/floating.js';
  import '@htmlplus/core/icon.js';
  offset = [20, 20];
</script>

<style scoped>
  div {
    position: relative;
  }
</style>
