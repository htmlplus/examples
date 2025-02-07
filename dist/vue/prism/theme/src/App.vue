<template>
  <plus-stack gap="0.5rem" items="stretch" vertical>
    <plus-prism theme="default">const theme = 'default';</plus-prism>
    <plus-prism theme="coy">const theme = 'coy';</plus-prism>
    <plus-prism theme="dark">const theme = 'dark';</plus-prism>
    <plus-prism theme="funky">const theme = 'funky';</plus-prism>
    <plus-prism theme="okaidia">const theme = 'okaidia';</plus-prism>
    <plus-prism theme="solarizedlight">const theme = 'solarizedlight';</plus-prism>
    <plus-prism theme="tomorrow">const theme = 'tomorrow';</plus-prism>
    <plus-prism theme="twilight">const theme = 'twilight';</plus-prism>
  </plus-stack>
</template>

<script setup>
  import '@htmlplus/ui/prism.js';
  import '@htmlplus/ui/stack.js';
</script>
