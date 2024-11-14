<template>
  <div>
    <plus-app-progress-bar
      :trickle-rate="0.075"
      :trickle-speed="250"
      ref="appProgressBar1Ref"
    ></plus-app-progress-bar>
    <br />
    <plus-app-progress-bar
      :trickle-rate="0.05"
      :trickle-speed="500"
      ref="appProgressBar2Ref"
    ></plus-app-progress-bar>
    <br />
    <plus-app-progress-bar
      :trickle-rate="0.025"
      :trickle-speed="750"
      ref="appProgressBar3Ref"
    ></plus-app-progress-bar>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  import '@htmlplus/ui/app-progress-bar.js';

  const appProgressBar3Ref = ref();
  const appProgressBar2Ref = ref();
  const appProgressBar1Ref = ref();
  onMounted(() => {
    requestAnimationFrame(() => {
      appProgressBar1Ref.value.start();
      appProgressBar2Ref.value.start();
      appProgressBar3Ref.value.start();
    });
  });
</script>

<style scoped>
  plus-app-progress-bar {
    /* This style is for demonstration purposes only and not for actual projects */
    position: static;
  }
</style>
