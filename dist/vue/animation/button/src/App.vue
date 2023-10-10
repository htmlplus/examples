<template>
  <plus-center>
    <plus-animation name="tada" ref="animationRef">
      <button @click="onClick">Click Me</button>
    </plus-animation>
  </plus-center>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/animation/names/attention-seekers/tada.js';
  import '@htmlplus/core/center.js';

  const animationRef = ref();
  function onClick() {
    animationRef.value.run = true;
  }
</script>

<style scoped>
  plus-animation {
    display: inline-block;
  }
</style>
