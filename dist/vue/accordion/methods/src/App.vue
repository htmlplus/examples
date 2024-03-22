<template>
  <div>
    <plus-stack gap="1rem">
      <button @click="onClick1">Collapse</button>
      <button @click="onClick2">Expand</button>
      <button @click="onClick3">Toggle</button>
    </plus-stack>
    <br />
    <plus-accordion summary="Summary" ref="accordionRef">
      <plus-faker></plus-faker>
    </plus-accordion>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/ui/accordion.js';
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/stack.js';

  const accordionRef = ref();
  function onClick1() {
    accordionRef.value.collapse();
  }
  function onClick2() {
    accordionRef.value.expand();
  }
  function onClick3() {
    accordionRef.value.toggle();
  }
</script>
