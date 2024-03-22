<template>
  <plus-center>
    <plus-browse multiple @plus-change="onPlusChange">Click Here</plus-browse>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/browse.js';
  import '@htmlplus/ui/center.js';

  function onPlusChange(event) {
    alert(`${event.detail.files.length} file(s) are selected.`);
  }
</script>
