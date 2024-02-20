<template>
  <plus-center>
    <plus-breadcrumb separator="/">
      <a href="#">HTMLPLUS</a>
      <a href="#">UI</a>
      <a href="#">Elements</a>
      <span>Breadcrumb</span>
    </plus-breadcrumb>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/breadcrumb.js';
  import '@htmlplus/core/center.js';
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
