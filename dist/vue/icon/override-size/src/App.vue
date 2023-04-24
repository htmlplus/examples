<template>
  <plus-center>
    <plus-icon name="home" size="xs"></plus-icon>
    <plus-icon name="home" size="sm"></plus-icon>
    <plus-icon name="home" size="md"></plus-icon>
    <plus-icon name="home" size="lg"></plus-icon>
    <plus-icon name="home" size="xl"></plus-icon>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/icon.js';
</script>

<style scoped>
  plus-icon {
    margin: 0 1rem;
  }
  plus-icon[size='xs'] {
    height: 1em;
    width: 1em;
  }
  plus-icon[size='sm'] {
    height: 1.25em;
    width: 1.25em;
  }
  plus-icon[size='md'] {
    height: 1.5em;
    width: 1.5em;
  }
  plus-icon[size='lg'] {
    height: 1.75em;
    width: 1.75em;
  }
  plus-icon[size='xl'] {
    height: 2em;
    width: 2em;
  }
</style>
