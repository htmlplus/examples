<template>
  <div>
    <plus-progress-bar :value="50" class="thin"></plus-progress-bar>
    <br />
    <plus-progress-bar :value="50"></plus-progress-bar>
    <br />
    <plus-progress-bar :value="50" class="thick"></plus-progress-bar>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/progress-bar.js';
</script>

<style scoped>
  plus-progress-bar.thin {
    height: 2px;
  }
  plus-progress-bar.thick {
    height: 1.5rem;
  }
</style>
