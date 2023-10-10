<template>
  <plus-center>
    <plus-switch @plus-change="onPlusChange"></plus-switch>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/switch.js';

  function onPlusChange(event) {
    alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  }
</script>
