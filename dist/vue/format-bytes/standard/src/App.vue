<template>
  <plus-stack vertical>
    <plus-format-bytes :value="1000" standard="METRIC"></plus-format-bytes>
    <plus-format-bytes :value="1024" standard="IEC"></plus-format-bytes>
  </plus-stack>
</template>

<script setup>
  import '@htmlplus/ui/format-bytes.js';
  import '@htmlplus/ui/stack.js';
</script>
