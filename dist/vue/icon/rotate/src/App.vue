<template>
  <plus-stack gap="2rem">
    <plus-icon name="house" :rotate="0"></plus-icon>
    <plus-icon name="house" :rotate="90"></plus-icon>
    <plus-icon name="house" :rotate="180"></plus-icon>
    <plus-icon name="house" :rotate="270"></plus-icon>
  </plus-stack>
</template>

<script setup>
  import '@htmlplus/ui/icon.js';
  import '@htmlplus/ui/stack.js';
</script>
