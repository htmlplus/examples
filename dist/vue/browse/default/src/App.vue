<template>
  <plus-center>
    <plus-browse @plus-change="onPlusChange"> Click Here </plus-browse>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/browse.js';
  import '@htmlplus/core/center.js';

  function onPlusChange(event) {
    console.log(event.detail);
  }
</script>
