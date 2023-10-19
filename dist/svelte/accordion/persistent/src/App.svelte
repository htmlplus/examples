<script>
  import { onMount } from 'svelte';

  import '@htmlplus/core/accordion.js';
  import '@htmlplus/core/faker.js';

  let accordionsRef;
  onMount(() => {
    Array.from(accordionsRef.children).forEach((accordion, index, accordions) => {
      accordion.addEventListener('plus-expand', (event) => {
        accordions.forEach((accordion) => {
          accordion.open = event.target == accordion;
        });
      });
    });
  });
</script>

<div bind:this={accordionsRef}>
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
