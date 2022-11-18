<template>
  <div class="center">
    <plus-animation id="animation1" name="tada">
      <button @click="window.animation1.run = true">Click Me</button>
    </plus-animation>
  </div>
</template>

<script setup>
  import '@htmlplus/core/animation.js';
</script>

<style scoped>
  .center {
    text-align: center;
  }
  plus-animation {
    display: inline-block;
  }
</style>
