<template>
  <plus-grid wrap="off">
    <plus-grid-item xs="6">
      <div>xs=6</div>
    </plus-grid-item>
    <plus-grid-item xs="2">
      <div>xs=2</div>
    </plus-grid-item>
    <plus-grid-item xs="6">
      <div>xs=6</div>
    </plus-grid-item>
    <plus-grid-item xs="2">
      <div>xs=2</div>
    </plus-grid-item>
  </plus-grid>
</template>

<script setup>
  import '@htmlplus/ui/grid-item.js';
  import '@htmlplus/ui/grid.js';
</script>

<style scoped>
  plus-grid div {
    color: #00bcd4;
    border: 1px solid #ffffff;
    background-color: #e0f7fa;
    padding: 0.5em;
    text-align: center;
  }
</style>
