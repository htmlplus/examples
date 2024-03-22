<template>
  <plus-accordion summary="Summary" @plus-expand="onPlusExpand" ref="accordionRef">
    <plus-progress-bar
      variant="indeterminate"
      slot="top"
      style="height: 2px"
      :hidden="hidden"
    ></plus-progress-bar>
    <plus-faker></plus-faker>
  </plus-accordion>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/ui/accordion.js';
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/progress-bar.js';

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
