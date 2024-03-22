<template>
  <div>
    <plus-center>
      <plus-animation :iterations="3" name="fade-out" ref="animationRef"></plus-animation>
    </plus-center>
    <br />
    <plus-center>
      <button @click="onClick1">Cancel</button>
      <button @click="onClick2">Finish</button>
      <button @click="onClick3">Pause</button>
      <button @click="onClick4">Play</button>
    </plus-center>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/ui/animation.js';
  import '@htmlplus/ui/center.js';

  const animationRef = ref();
  function onClick1() {
    animationRef.value.cancel();
  }
  function onClick2() {
    animationRef.value.finish();
  }
  function onClick3() {
    animationRef.value.pause();
  }
  function onClick4() {
    animationRef.value.play();
  }
</script>

<style scoped>
  button {
    margin: 0 0.5rem;
  }
  plus-animation {
    background: lightgray;
    width: 100px;
    height: 100px;
  }
</style>
