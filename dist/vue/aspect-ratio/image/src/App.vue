<template>
  <plus-aspect-ratio value="18/6">
    <img src="https://picsum.photos/id/95/640/640" />
  </plus-aspect-ratio>
</template>

<script setup>
  import '@htmlplus/core/aspect-ratio.js';
</script>

<style scoped>
  img {
    object-fit: cover;
  }
</style>
