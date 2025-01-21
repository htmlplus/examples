<template>
  <plus-app-progress-bar ref="appProgressBarRef"></plus-app-progress-bar>
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

    height: 4px;
    transition: 2500ms ease;
    z-index: 1500;
  }
  plus-app-progress-bar::part(bar) {
    background-color: #d63939;
    transition: 500ms ease-in-out;
  }
</style>
