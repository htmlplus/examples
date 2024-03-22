<template>
  <div ref="accordionsRef">
    <plus-accordion summary="First">
      <plus-faker></plus-faker>
    </plus-accordion>
    <plus-accordion summary="Second">
      <plus-faker></plus-faker>
    </plus-accordion>
    <plus-accordion summary="Third">
      <plus-faker></plus-faker>
    </plus-accordion>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  import '@htmlplus/ui/accordion.js';
  import '@htmlplus/ui/faker.js';

  const accordionsRef = ref();
  onMounted(() => {
    Array.from(accordionsRef.value.children).forEach((accordion, index, accordions) => {
      accordion.addEventListener('plus-expand', (event) => {
        accordions.forEach((accordion) => {
          accordion.open = event.target == accordion;
        });
      });
    });
  });
</script>
