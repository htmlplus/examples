<template>
  <plus-app-progress-bar color="#d63939" ref="appProgressBarRef"></plus-app-progress-bar>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  import '@htmlplus/ui/app-progress-bar.js';

  const appProgressBarRef = ref();
  onMounted(() => {
    requestAnimationFrame(() => {
      appProgressBarRef.value?.start();
    });
    setTimeout(() => {
      appProgressBarRef.value?.done();
    }, 5000);
  });
</script>

<style scoped>
  plus-app-progress-bar {
    /* This style is for demonstration purposes only and not for actual projects */
    position: static;
  }
</style>
