<template>
  <div>
    <plus-progress-bar :value="50" color="primary"></plus-progress-bar>
    <br />
    <plus-progress-bar :value="30" color="secondary"></plus-progress-bar>
    <br />
    <plus-progress-bar :value="70" color="tertiary"></plus-progress-bar>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/progress-bar.js';
</script>

<style scoped>
  plus-progress-bar[color='primary'] {
    --plus-progress-bar-indicator-background-color: #00bfff;
  }
  plus-progress-bar[color='secondary'] {
    --plus-progress-bar-indicator-background-color: #7cfc00;
  }
  plus-progress-bar[color='tertiary'] {
    --plus-progress-bar-indicator-background-color: #ff1493;
  }
</style>
