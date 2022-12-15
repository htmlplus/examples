<template>
  <div class="container">
    <plus-intersection @plus-change="onChange($event)">
      <plus-counter to="50000" :play="play"></plus-counter>
    </plus-intersection>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import '@htmlplus/core/counter.js';
  import '@htmlplus/core/intersection.js';
  const play = ref(false);
  function onChange(event) {
    play.value = event.detail.isIntersecting;
  }
</script>

<style scoped>
  plus-intersection {
    display: block;
    text-align: center;
    margin: 25rem auto;
  }
  .container {
    position: relative;
    height: 20rem;
    overflow: auto;
    background-color: #eeeeee;
  }
</style>
