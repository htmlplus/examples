<template>
  <plus-center>
    <plus-signature
      id="signature2"
      background-color="lightgray"
      @plus-end="onPlusEnd()"
    ></plus-signature>
  </plus-center>
  <br />
  <plus-center>
    <button :disabled="!canUndo" @click="onUndo()">Undo</button>
    &nbsp; &nbsp;
    <button :disabled="!canRedo" @click="onRedo()">Redo</button>
  </plus-center>
</template>

<script setup>
  import { ref } from 'vue';
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/signature.js';
  const canUndo = ref(false);
  const canRedo = ref(false);
  function sync() {
    canUndo.value = window.signature2.canUndo;
    canRedo.value = window.signature2.canRedo;
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
