<template>
  <plus-center>
    <plus-browse :min="3" :max="5" multiple @plus-change="onPlusChange"> Click Here </plus-browse>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/browse.js';
  import '@htmlplus/ui/center.js';

  function onPlusChange(event) {
    if (event.detail.error) {
      alert(event.detail.error.message);
    }
  }
</script>
