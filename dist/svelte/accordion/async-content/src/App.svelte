<script>
  import '@htmlplus/core/accordion.js';
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/progress-bar.js';

  let accordionRef;
  let hidden = true;
  function onPlusExpand(event) {
    event.preventDefault();
    hidden = false;
    setTimeout(() => {
      hidden = true;
      accordionRef.open = true;
    }, 2500);
  }
</script>

<plus-accordion summary="Summary" on:plus-expand={onPlusExpand} bind:this={accordionRef}>
  <plus-progress-bar variant="indeterminate" slot="top" {hidden}></plus-progress-bar>
  <plus-faker></plus-faker>
</plus-accordion>

<style>
  plus-progress-bar {
    height: 2px;
  }
</style>
