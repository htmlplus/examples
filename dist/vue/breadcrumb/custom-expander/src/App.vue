<template>
  <plus-center>
    <plus-breadcrumb separator="-" :max="2" expander-text="Show more">
      <plus-icon slot="expander" name="chevron-compact-right"></plus-icon>
      <a href="#">HTMLPLUS</a>
      <a href="#">Core</a>
      <a href="#">UI Elements</a>
      <a href="#">Breadcrumb</a>
    </plus-breadcrumb>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/breadcrumb.js';
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/icon.js';
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
