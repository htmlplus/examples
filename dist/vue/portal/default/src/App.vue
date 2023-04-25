<template>
  <div id="target"></div>
  <div id="source">
    <plus-portal target="#target">
      <plus-faker></plus-faker>
    </plus-portal>
  </div>
</template>

<script setup>
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/portal.js';
</script>

<style scoped>
  #target {
    color: blue;
  }
  #source {
    color: red;
  }
</style>
