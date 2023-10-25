<template>
  <plus-accordion summary="Summary" @plus-expand="onPlusExpand" ref="accordionRef">
    <plus-progress-bar variant="indeterminate" slot="top" :hidden="hidden"></plus-progress-bar>
    <plus-faker></plus-faker>
  </plus-accordion>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/core/accordion.js';
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/progress-bar.js';

  const accordionRef = ref();
  const hidden = ref(true);
  function onPlusExpand(event) {
    event.preventDefault();
    hidden.value = false;
    setTimeout(() => {
      hidden.value = true;
      accordionRef.value.open = true;
    }, 2500);
  }
</script>

<style scoped>
  plus-progress-bar {
    height: 2px;
  }
</style>
