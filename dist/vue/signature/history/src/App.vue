<template>
  <plus-center>
    <plus-signature
      id="signature2"
      background-color="lightgray"
      @plus-end="onPlusEnd()"
    ></plus-signature>
  </plus-center>
  <br />
  <plus-stack gap="1rem">
    <button :disabled="!canUndo" @click="onUndo()">Undo</button>
    <button :disabled="!canRedo" @click="onRedo()">Redo</button>
  </plus-stack>
</template>

<script setup>
  import { ref } from 'vue';
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/signature.js';
  import '@htmlplus/core/stack.js';
  const canUndo = ref(false);
  const canRedo = ref(false);
  function sync() {
    canUndo.value = window.signature2.canUndo();
    canRedo.value = window.signature2.canRedo();
  }
  function onUndo() {
    window.signature2.undo();
    sync();
  }
  function onRedo() {
    window.signature2.redo();
    sync();
  }
  function onPlusEnd() {
    sync();
  }
</script>
