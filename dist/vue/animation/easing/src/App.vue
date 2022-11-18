<template>
  <plus-grid justify-content="evenly" gutter="md">
    <plus-grid-item xs="12" sm="auto">
      <plus-animation
        easing="ease-in"
        iterations="Infinity"
        name="fade-in"
        run
      ></plus-animation>
    </plus-grid-item>
    <plus-grid-item xs="12" sm="auto">
      <plus-animation
        easing="ease-out"
        iterations="Infinity"
        name="fade-in"
        run
      ></plus-animation>
    </plus-grid-item>
  </plus-grid>
</template>

<script setup>
  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/grid.js';
  import '@htmlplus/core/grid-item.js';
</script>

<style scoped>
  plus-animation {
    background: lightgray;
    width: 100px;
    height: 100px;
    margin: auto;
  }
</style>
