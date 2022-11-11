<template>
  <plus-animation
    name="fade-in"
    duration="2500"
    iterations="Infinity"
    run
  ></plus-animation>
</template>

<script setup>
  import '@htmlplus/core/animation.js';
</script>

<style scoped>
  plus-animation {
    background: lightgray;
    width: 100px;
    height: 100px;
    margin: auto;
  }
</style>
