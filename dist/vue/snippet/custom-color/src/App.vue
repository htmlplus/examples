<template>
  <plus-stack gap="0.5rem" items="stretch" vertical>
    <plus-snippet symbol="$" color="primary">npm i @htmlplus/ui</plus-snippet>
    <plus-snippet symbol="$" color="secondary">npm i @htmlplus/ui</plus-snippet>
    <plus-snippet symbol="$" color="tertiary">npm i @htmlplus/ui</plus-snippet>
  </plus-stack>
</template>

<script setup>
  import '@htmlplus/ui/snippet.js';
  import '@htmlplus/ui/stack.js';
</script>

<style scoped>
  plus-snippet[color='primary'] {
    --plus-snippet-color: #ff5449;
  }
  plus-snippet[color='secondary'] {
    --plus-snippet-color: #08dfc8;
  }
  plus-snippet[color='tertiary'] {
    --plus-snippet-color: #5f9ee9;
  }
</style>
