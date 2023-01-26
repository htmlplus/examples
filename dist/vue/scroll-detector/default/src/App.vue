<template>
  <div class="container">
    <div class="scrollable">
      <plus-faker type="lorem.paragraphs" arguments='[20, "\n\n"]'></plus-faker>
    </div>
    <plus-scroll-detector
      source=".scrollable"
      vertical
      @plus-change="onChange($event)"
    >
    </plus-scroll-detector>
  </div>
</template>

<script setup>
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/scroll-detector.js';
  function onChange(event) {
    console.log(event.detail);
  }
</script>

<style scoped>
  .container {
    position: relative;
  }
  .scrollable {
    height: 20em;
    overflow-y: auto;
  }
</style>
