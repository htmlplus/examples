<template>
  <div>
    <plus-card :elevation="elevation"></plus-card>
    <br />
    <input type="range" min="1" max="24" @change="onChange" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/ui/card.js';

  const elevation = ref(24);
  function onChange(event) {
    elevation.value = event.target.value;
  }
</script>

<style scoped>
  plus-card {
    height: 12rem;
    width: 12rem;
    margin: auto;
  }
  input[type='range'] {
    display: block;
    width: 12rem;
    margin: auto;
  }
</style>
