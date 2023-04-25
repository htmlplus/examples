<template>
  <plus-stack vertical>
    <plus-format-bytes value="1000" separator=""></plus-format-bytes>
    <plus-format-bytes value="1000" separator=" "></plus-format-bytes>
  </plus-stack>
</template>

<script setup>
  import '@htmlplus/core/format-bytes.js';
  import '@htmlplus/core/stack.js';
</script>
