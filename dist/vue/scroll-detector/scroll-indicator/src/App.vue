<template>
  <div class="container">
    <plus-progress-bar :value="value"></plus-progress-bar>
    <div class="scrollable reference2">
      <plus-faker api="lorem.paragraphs" :arguments="[20, '\n\n']" :seed="0"></plus-faker>
    </div>
    <plus-scroll-detector
      reference=".reference2"
      vertical
      @plus-change="onPlusChange"
    ></plus-scroll-detector>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/progress-bar.js';
  import '@htmlplus/core/scroll-detector.js';

  const value = ref(0);
  function onPlusChange(event) {
    value.value = event.detail.progress;
  }
</script>

<style scoped>
  .container {
    position: relative;
  }
  .scrollable {
    padding: 1rem;
    height: 20em;
    overflow-y: auto;
  }
</style>
