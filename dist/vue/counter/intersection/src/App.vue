<template>
  <div class="container">
    <plus-intersection @plus-change="onPlusChange">
      <plus-counter :to="1000" ref="counterRef"></plus-counter>
    </plus-intersection>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/core/counter.js';
  import '@htmlplus/core/intersection.js';

  const counterRef = ref();
  function onPlusChange(event) {
    counterRef.value.play = event.detail.isIntersecting;
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
    background-color: whitesmoke;
  }
</style>
