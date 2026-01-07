<template>
  <div>
    <plus-center>
      <plus-signature ref="signatureRef"></plus-signature>
    </plus-center>
    <br />
    <plus-stack gap="0.5rem">
      <button @click="onClick1">To Data URL</button>
      <button @click="onClick2">To SVG</button>
      <button @click="onClick3">Get Value</button>
    </plus-stack>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/signature.js';
  import '@htmlplus/ui/stack.js';

  const signatureRef = ref();
  function onClick1() {
    console.log(signatureRef.value.toDataURL());
  }
  function onClick2() {
    console.log(signatureRef.value.toSVG());
  }
  function onClick3() {
    console.log(signatureRef.value.value);
  }
</script>
