<template>
  <plus-center>
    <plus-avatar shape="circle">
      <plus-animation
        delay="0000"
        duration="2000"
        iterations="Infinity"
        name="custom-pulse"
        run
      ></plus-animation>
      <plus-animation
        delay="1000"
        duration="2000"
        iterations="Infinity"
        name="custom-pulse"
        run
      ></plus-animation>
      <img src="http://placeimg.com/94/94/people" />
    </plus-avatar>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/avatar.js';
  import '@htmlplus/core/center.js';
</script>

<style scoped>
  plus-avatar {
    margin: 1.5rem;
  }
  plus-animation {
    border: solid 3px black;
    display: inline-block;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    z-index: -1;
  }
</style>
