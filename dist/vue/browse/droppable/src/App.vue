<template>
  <plus-browse droppable @plus-change="onPlusChange">
    Click or Drag & Drop a file(s) here
  </plus-browse>
</template>

<script setup>
  import '@htmlplus/ui/browse.js';

  function onPlusChange(event) {
    const name = event.detail.files[0].file.name;
    alert(`File '${name}' selected.`);
  }
</script>

<style scoped>
  plus-browse {
    background: white;
    border: 2px dashed lightgray;
    border-radius: 4px;
    display: block;
    padding: 3rem;
    text-align: center;
  }
  plus-browse[dragging] {
    border-color: darkgray;
  }
</style>
