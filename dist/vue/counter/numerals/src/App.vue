<template>
  <plus-center>
    <plus-counter :to="1000" play :numerals="numerals"></plus-counter>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/counter.js';

  const numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
</script>
