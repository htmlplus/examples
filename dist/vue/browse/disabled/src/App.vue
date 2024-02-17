<template>
  <plus-center>
    <plus-browse disabled @plus-change="onPlusChange"> Click Here </plus-browse>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/browse.js';
  import '@htmlplus/core/center.js';

  function onPlusChange() {
    alert('File selected.');
  }
</script>
