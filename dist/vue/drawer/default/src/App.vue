<template>
  <plus-grid>
    <plus-grid-item xs="auto">
      <plus-drawer animation size="200px" connector="drawer-default">
        <plus-card>Drawer Content</plus-card>
      </plus-drawer>
    </plus-grid-item>
    <plus-grid-item xs="grow">
      <plus-card>
        <plus-drawer-toggler connector="drawer-default">Toggle</plus-drawer-toggler>
      </plus-card>
    </plus-grid-item>
  </plus-grid>
</template>

<script setup>
  import '@htmlplus/ui/card.js';
  import '@htmlplus/ui/drawer-toggler.js';
  import '@htmlplus/ui/drawer.js';
  import '@htmlplus/ui/grid-item.js';
  import '@htmlplus/ui/grid.js';
</script>

<style scoped>
  plus-card {
    --plus-card-background-color: lightgray;
    padding: 10rem 0;
    text-align: center;
  }
  plus-drawer plus-card {
    --plus-card-background-color: lightblue;
    margin-right: 0.5rem;
  }
</style>
