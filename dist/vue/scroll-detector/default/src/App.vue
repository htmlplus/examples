<template>
  <div class="container">
    <div class="scrollable reference1">
      <plus-faker api="lorem.paragraphs" :arguments="[20, '\n\n']"></plus-faker>
    </div>
    <plus-scroll-detector
      reference=".reference1"
      vertical
      @plus-change="onPlusChange"
    ></plus-scroll-detector>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/scroll-detector.js';

  function onPlusChange(event) {
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
