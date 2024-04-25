<template>
  <plus-center>
    <plus-browse disabled @plus-change="onPlusChange">Click Here</plus-browse>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/browse.js';
  import '@htmlplus/ui/center.js';

  function onPlusChange() {
    alert('File selected.');
  }
</script>
