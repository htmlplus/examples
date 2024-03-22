<template>
  <plus-center>
    <plus-counter :duration="5000" :to="1000" play></plus-counter>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/counter.js';
</script>
