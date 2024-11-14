<template>
  <div>
    <plus-app-progress-bar ref="appProgressBarRef"></plus-app-progress-bar>
    <br />
    <plus-stack gap="0.5rem">
      <button @click="onClick1">Start</button>
      <button @click="onClick2">Set</button>
      <button @click="onClick3">Increase</button>
      <button @click="onClick4">Trickle</button>
      <button @click="onClick5">Done</button>
      <button @click="onClick6">Force Done</button>
    </plus-stack>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/ui/app-progress-bar.js';
  import '@htmlplus/ui/stack.js';

  const appProgressBarRef = ref();
  function onClick1() {
    appProgressBarRef.value.start();
  }
  function onClick2() {
    appProgressBarRef.value.set(0.4);
  }
  function onClick3() {
    appProgressBarRef.value.increase();
  }
  function onClick4() {
    appProgressBarRef.value.trickle();
  }
  function onClick5() {
    appProgressBarRef.value.done();
  }
  function onClick6() {
    appProgressBarRef.value.done(true);
  }
</script>

<style scoped>
  plus-app-progress-bar {
    /* This style is for demonstration purposes only and not for actual projects */
    position: static;
  }
</style>
