<template>
  <plus-center>
    <plus-counter decimal="." :decimals="2" separator="," :to="1000" play></plus-counter>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/counter.js';
</script>
