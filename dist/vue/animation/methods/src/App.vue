<template>
  <div class="center">
    <plus-animation
      id="element2"
      iterations="3"
      name="fade-out"
    ></plus-animation>
    <br />
    <button @click="window.element2.cancel()">Cancel</button>
    <button @click="window.element2.finish()">Finish</button>
    <button @click="window.element2.pause()">Pause</button>
    <button @click="window.element2.play()">Play</button>
  </div>
</template>

<script setup>
  import '@htmlplus/core/animation.js';
</script>

<style scoped>
  button {
    margin: 0 0.5rem;
  }
  plus-animation {
    background: lightgray;
    width: 100px;
    height: 100px;
    margin: auto;
  }
  .center {
    text-align: center;
  }
</style>
