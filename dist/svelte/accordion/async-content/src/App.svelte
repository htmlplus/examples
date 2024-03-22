<script>
  import '@htmlplus/ui/accordion.js';
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/progress-bar.js';

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
  <plus-progress-bar variant="indeterminate" slot="top" style="height: 2px;" {hidden}
  ></plus-progress-bar>
  <plus-faker></plus-faker>
</plus-accordion>
