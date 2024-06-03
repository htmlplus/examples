<script>
  import '@htmlplus/ui/accordion.js';
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/stack.js';
</script>

<plus-accordion>
  <plus-stack slot="summary" justify="between">
    <b>Summary</b>
    <button>Action</button>
  </plus-stack>
  <plus-faker></plus-faker>
</plus-accordion>

<style>
  plus-stack[slot='summary'] {
    flex-grow: 1;
    margin-inline-end: 1rem;
  }
</style>
