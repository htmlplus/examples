<template>
  <plus-center>
    <plus-signature
      @plus-after="onPlusAfter"
      @plus-before="onPlusBefore"
      @plus-change="onPlusChange"
      @plus-end="onPlusEnd"
      @plus-ready="onPlusReady"
      @plus-start="onPlusStart"
    ></plus-signature>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/signature.js';

  function onPlusAfter(event) {
    console.log('after', event.detail);
  }
  function onPlusBefore(event) {
    console.log('before', event.detail);
  }
  function onPlusChange(event) {
    console.log('change', event.detail);
  }
  function onPlusEnd(event) {
    console.log('end', event.detail);
  }
  function onPlusReady() {
    console.log('ready');
  }
  function onPlusStart(event) {
    console.log('start', event.detail);
  }
</script>
