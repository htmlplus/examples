<template>
  <plus-prism language="python" theme="solarizedlight" :plugins="{ 'line-numbers': true }"
    >print("Hello, World!")</plus-prism
  >
</template>

<script setup>
  import '@htmlplus/ui/prism.js';
</script>
