<script>
  import '@htmlplus/core/accordion.js';
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/stack.js';

  let accordionRef;
  function onClick1() {
    accordionRef.collapse();
  }
  function onClick2() {
    accordionRef.expand();
  }
  function onClick3() {
    accordionRef.toggle();
  }
</script>

<plus-stack gap="1rem">
  <button on:click={onClick1}>Collapse</button>
  <button on:click={onClick2}>Expand</button>
  <button on:click={onClick3}>Toggle</button>
</plus-stack>
<br />
<plus-accordion summary="Summary" bind:this={accordionRef}>
  <plus-faker></plus-faker>
</plus-accordion>
