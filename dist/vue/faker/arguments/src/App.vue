<template>
  <plus-faker api="lorem.paragraphs" :arguments="[5, '\n\n']"></plus-faker>
</template>

<script setup>
  import '@htmlplus/core/faker.js';
</script>
