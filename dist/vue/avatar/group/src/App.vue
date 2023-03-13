<template>
  <div class="center">
    <plus-avatar-group>
      <plus-avatar>
        <img src="https://picsum.photos/id/331/90/90" />
      </plus-avatar>
      <plus-avatar>
        <img src="https://picsum.photos/id/334/90/90" />
      </plus-avatar>
      <plus-avatar>
        <img src="https://picsum.photos/id/338/90/90" />
      </plus-avatar>
    </plus-avatar-group>
  </div>
</template>

<script setup>
  import '@htmlplus/core/avatar.js';
  import '@htmlplus/core/avatar-group.js';
</script>

<style scoped>
  .center {
    text-align: center;
  }
</style>
