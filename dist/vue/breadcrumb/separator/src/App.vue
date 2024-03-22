<template>
  <plus-center>
    <plus-breadcrumb separator="-">
      <a href="#">First</a>
      <a href="#">Second</a>
      <a href="#">Third</a>
      <a href="#">Fourth</a>
      <a href="#">Fifth</a>
    </plus-breadcrumb>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/breadcrumb.js';
  import '@htmlplus/ui/center.js';
</script>

<style scoped>
  plus-breadcrumb a {
    color: inherit;
    text-decoration: none;
  }
  plus-breadcrumb a:hover {
    text-decoration: underline;
  }
</style>
