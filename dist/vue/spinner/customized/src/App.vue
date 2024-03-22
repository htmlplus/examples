<template>
  <plus-center>
    <plus-spinner type="dual-ring"></plus-spinner>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/spinner.js';
</script>

<style scoped>
  plus-spinner {
    color: purple;
    width: 5rem;
    height: 5rem;
    font-size: 0.8rem;
  }
</style>
