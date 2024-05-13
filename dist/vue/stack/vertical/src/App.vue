<template>
  <plus-stack gap="1rem" vertical>
    <plus-card :elevation="5">
      <plus-card-body>Item 1</plus-card-body>
    </plus-card>
    <plus-card :elevation="5">
      <plus-card-body>Item 2</plus-card-body>
    </plus-card>
    <plus-card :elevation="5">
      <plus-card-body>Item 3</plus-card-body>
    </plus-card>
  </plus-stack>
</template>

<script setup>
  import '@htmlplus/ui/card-body.js';
  import '@htmlplus/ui/card.js';
  import '@htmlplus/ui/stack.js';
</script>
