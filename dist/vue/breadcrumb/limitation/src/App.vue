<template>
  <plus-stack gap="0.75rem" vertical>
    <plus-breadcrumb separator="/" :max="4" :offset="0">
      <a href="#">Item 1</a>
      <a href="#">Item 2</a>
      <a href="#">Item 3</a>
      <a href="#">Item 4</a>
      <a href="#">Item 5</a>
      <a href="#">Item 6</a>
      <a href="#">Item 7</a>
      <a href="#">Item 8</a>
    </plus-breadcrumb>
    <plus-breadcrumb separator="/" :max="4" :offset="2">
      <a href="#">Item 1</a>
      <a href="#">Item 2</a>
      <a href="#">Item 3</a>
      <a href="#">Item 4</a>
      <a href="#">Item 5</a>
      <a href="#">Item 6</a>
      <a href="#">Item 7</a>
      <a href="#">Item 8</a>
    </plus-breadcrumb>
    <plus-breadcrumb separator="/" :max="4" :offset="-1">
      <a href="#">Item 1</a>
      <a href="#">Item 2</a>
      <a href="#">Item 3</a>
      <a href="#">Item 4</a>
      <a href="#">Item 5</a>
      <a href="#">Item 6</a>
      <a href="#">Item 7</a>
      <a href="#">Item 8</a>
    </plus-breadcrumb>
  </plus-stack>
</template>

<script setup>
  import '@htmlplus/ui/breadcrumb.js';
  import '@htmlplus/ui/stack.js';
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
