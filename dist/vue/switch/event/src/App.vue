<template>
  <plus-center>
    <plus-switch @plus-change="onChange($event)"></plus-switch>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/switch.js';
  function onChange(event) {
    window.alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  }
</script>
