<template>
  <plus-grid align-items="center">
    <plus-grid-item xs="6">
      <div>Item</div>
    </plus-grid-item>
    <plus-grid-item xs="3">
      <div>Item</div>
    </plus-grid-item>
    <plus-grid-item xs="3">
      <div>Item</div>
    </plus-grid-item>
    <plus-grid-item xs="3">
      <div>Item</div>
    </plus-grid-item>
    <plus-grid-item xs="3">
      <div>Item</div>
    </plus-grid-item>
    <plus-grid-item xs="grow">
      <div>Item</div>
    </plus-grid-item>
  </plus-grid>
</template>

<script setup>
  import '@htmlplus/ui/grid-item.js';
  import '@htmlplus/ui/grid.js';
</script>

<style scoped>
  plus-grid {
    background-color: whitesmoke;
    height: 8rem;
  }
  plus-grid div {
    color: #00bcd4;
    border: 1px solid #ffffff;
    background-color: #e0f7fa;
    padding: 0.5em;
    text-align: center;
  }
</style>
