<template>
  <plus-center>
    <plus-browse @plus-change="onPlusChange">Click Here</plus-browse>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/browse.js';
  import '@htmlplus/ui/center.js';

  function onPlusChange(event) {
    console.log(event.detail);
  }
</script>
