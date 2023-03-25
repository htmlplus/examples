<template>
  <plus-center>
    <plus-avatar-group stacked>
      <plus-avatar shape="circle">A</plus-avatar>
      <plus-tooltip>Tooltip A</plus-tooltip>
      <plus-avatar shape="circle">B</plus-avatar>
      <plus-tooltip>Tooltip B</plus-tooltip>
      <plus-avatar shape="circle">C</plus-avatar>
      <plus-tooltip>Tooltip C</plus-tooltip>
    </plus-avatar-group>
  </plus-center>
</template>

<script setup>
  import '@htmlplus/core/avatar.js';
  import '@htmlplus/core/avatar-group.js';
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/tooltip.js';
</script>
