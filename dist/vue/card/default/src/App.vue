<template>
  <div class="container">
    <plus-card></plus-card>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/card.js';
</script>

<style scoped>
  .container {
    padding: 2rem 0;
    background-color: whitesmoke;
  }
  plus-card {
    height: 12rem;
    width: 12rem;
    margin: auto;
  }
</style>
