<template>
  <plus-center>
    <plus-click-outside @plus-click-outside="onClickOutside()">
      <button @click="onClick()">Open Menu Dropdown</button>
      <plus-card elevation="10" id="menu" outlined v-if="open">
        <plus-card-body>
          It will stay visible until you click outside.
        </plus-card-body>
      </plus-card>
    </plus-click-outside>
  </plus-center>
</template>

<script setup>
  import { ref } from 'vue';
  import '@htmlplus/core/card.js';
  import '@htmlplus/core/card-body.js';
  import '@htmlplus/core/center.js';
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
  plus-card {
    position: absolute;
    top: calc(100% + 0.25rem);
  }
  plus-click-outside {
    display: inline-block;
    position: relative;
  }
</style>
