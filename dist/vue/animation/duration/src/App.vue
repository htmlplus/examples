<template>
  <plus-center>
    <plus-animation :duration="2500" :iterations="Infinity" name="fade-in" run></plus-animation>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/animation.js';
  import '@htmlplus/ui/center.js';
</script>

<style scoped>
  plus-animation {
    background: lightgray;
    width: 100px;
    height: 100px;
  }
</style>
