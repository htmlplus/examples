<template>
  <plus-center>
    <plus-counter :from="1000" :to="10" play></plus-counter>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/counter.js';
</script>
