<template>
  <plus-center>
    <plus-animation
      id="animation4"
      iterations="3"
      name="fade-out"
    ></plus-animation>
  </plus-center>
  <br />
  <plus-center>
    <button @click="window.animation4.cancel()">Cancel</button>
    <button @click="window.animation4.finish()">Finish</button>
    <button @click="window.animation4.pause()">Pause</button>
    <button @click="window.animation4.play()">Play</button>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/center.js';
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
