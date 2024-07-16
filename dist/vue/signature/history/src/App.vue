<template>
  <div>
    <plus-center>
      <plus-signature @plus-end="onPlusEnd" ref="signatureRef"></plus-signature>
    </plus-center>
    <br />
    <plus-stack gap="1rem">
      <button @click="onClick1" :disabled="disabled1">Undo</button>
      <button @click="onClick2" :disabled="disabled2">Redo</button>
    </plus-stack>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/signature.js';
  import '@htmlplus/ui/stack.js';

  const signatureRef = ref();
  const disabled2 = ref(true);
  const disabled1 = ref(true);
  const sync = () => {
    disabled1.value = !signatureRef.value.undoable;
    disabled2.value = !signatureRef.value.redoable;
  };
  function onClick1() {
    signatureRef.value.undo();
    sync();
  }
  function onClick2() {
    signatureRef.value.redo();
    sync();
  }
  function onPlusEnd() {
    sync();
  }
</script>
