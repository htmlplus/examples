<template>
  <plus-stack vertical>
    <plus-format-bytes unit="auto" :value="1000"></plus-format-bytes>
    <plus-format-bytes unit="base" :value="10000"></plus-format-bytes>
    <plus-format-bytes unit="kilo" :value="100000"></plus-format-bytes>
    <plus-format-bytes unit="kilo" :value="1000000"></plus-format-bytes>
    <plus-format-bytes unit="kilo" :value="10000000"></plus-format-bytes>
    <plus-format-bytes unit="kilo" :value="100000000"></plus-format-bytes>
    <plus-format-bytes unit="kilo" :value="1000000000"></plus-format-bytes>
  </plus-stack>
</template>

<script setup>
  import '@htmlplus/ui/format-bytes.js';
  import '@htmlplus/ui/stack.js';
</script>
