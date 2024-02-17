<template>
  <plus-center>
    <plus-browse multiple @plus-change="onPlusChange">Click Here</plus-browse>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/browse.js';
  import '@htmlplus/core/center.js';

  function onPlusChange(event) {
    alert(`${event.detail.files.length} file(s) are selected.`);
  }
</script>
