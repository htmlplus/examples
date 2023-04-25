<template>
  <plus-browse droppable @plus-change="onChange($event)">
    Click or Drag & Drop a file(s) here
  </plus-browse>
</template>

<script setup>
  import '@htmlplus/core/browse.js';
  function onChange(event) {
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
  plus-browse[dragging]:not([dragging='false']) {
    border-color: darkgray;
  }
</style>
