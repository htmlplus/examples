<template>
  <div>
    <plus-center>
      <plus-avatar-group>
        <plus-avatar></plus-avatar>
        <plus-avatar></plus-avatar>
        <plus-avatar></plus-avatar>
      </plus-avatar-group>
    </plus-center>
    <br />
    <plus-center>
      <plus-avatar-group stacked>
        <plus-avatar></plus-avatar>
        <plus-avatar></plus-avatar>
        <plus-avatar></plus-avatar>
      </plus-avatar-group>
    </plus-center>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/avatar-group.js';
  import '@htmlplus/ui/avatar.js';
  import '@htmlplus/ui/center.js';
</script>

<style scoped>
  plus-avatar-group plus-avatar {
    margin-inline-end: 2rem;
  }
  plus-avatar-group[stacked] plus-avatar {
    margin-inline-end: -2rem;
  }
</style>
