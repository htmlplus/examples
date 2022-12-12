<template>
  <div class="center">
    <plus-counter
      duration="2000"
      from="10000"
      to="50000"
      separator=","
      :play="play"
      @plus-complete="play = false"
    ></plus-counter>
    <br />
    <button @click="play = true">Start</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import '@htmlplus/core/counter.js';
  const play = ref(false);
</script>

<style scoped>
  .center {
    text-align: center;
  }
  button {
    margin: 1rem 0.5rem;
  }
</style>
