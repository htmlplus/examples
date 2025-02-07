<template>
  <plus-stack gap="0.5rem" items="stretch" vertical>
    <plus-prism ref="prism1Ref">const now = 0;</plus-prism>
    <plus-prism sync ref="prism2Ref">const now = 0;</plus-prism>
    <plus-center>
      <button @click="onClick">Change</button>
    </plus-center>
  </plus-stack>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/prism.js';
  import '@htmlplus/ui/stack.js';

  const prism2Ref = ref();
  const prism1Ref = ref();
  function onClick() {
    prism1Ref.value.innerHTML = `const now = ${Date.now()};`;
    prism2Ref.value.innerHTML = `const now = ${Date.now()};`;
  }
</script>
