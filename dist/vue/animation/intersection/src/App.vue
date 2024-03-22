<template>
  <div class="container">
    <plus-intersection @plus-change="onPlusChange">
      <plus-animation name="heart-beat" ref="animationRef"></plus-animation>
    </plus-intersection>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/ui/animation.js';
  import '@htmlplus/ui/animation/names/attention-seekers/heart-beat.js';
  import '@htmlplus/ui/intersection.js';

  const animationRef = ref();
  function onPlusChange(event) {
    animationRef.value.run = event.detail.isIntersecting;
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
