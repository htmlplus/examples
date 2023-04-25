<template>
  <div class="container">
    <plus-intersection @plus-change="onChange($event)">
      <plus-animation name="heart-beat" :run="run"></plus-animation>
    </plus-intersection>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/intersection.js';
  import '@htmlplus/core/animation/names/attention-seekers/heart-beat.js';
  const run = ref(false);
  function onChange(event) {
    run.value = event.detail.isIntersecting;
  }
</script>

<style scoped>
  plus-animation {
    background: lightgray;
    width: 100px;
    height: 100px;
    margin: auto;
  }
  plus-intersection {
    display: block;
    text-align: center;
    margin: 1000px auto;
  }
  .container {
    position: relative;
    height: 20rem;
    overflow: auto;
    background-color: whitesmoke;
  }
</style>
