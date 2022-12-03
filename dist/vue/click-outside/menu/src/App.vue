<template>
  <plus-click-outside @plus-click-outside="onClickOutside()">
    <button @click="onClick()">Open Menu Dropdown</button>
    <div v-if="open">
      Click me, I will stay visible until you click outside.
    </div>
  </plus-click-outside>
</template>

<script setup>
  import { ref } from 'vue';
  import '@htmlplus/core/click-outside.js';
  const open = ref(false);
  function onClick() {
    open.value = !open.value;
  }
  function onClickOutside() {
    open.value = false;
  }
</script>

<style scoped>
  plus-click-outside {
    display: inline-block;
    position: relative;
  }
  #menu {
    border: solid 1px gray;
    position: absolute;
    top: calc(100% + 0.25rem);
    padding: 10px;
  }
</style>
