<template>
  <plus-center>
    <plus-switch @plus-change="onPlusChange"></plus-switch>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/switch.js';

  function onPlusChange(event) {
    alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  }
</script>
