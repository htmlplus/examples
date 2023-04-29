<script>
  import '@htmlplus/core/accordion.js';
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/stack.js';
</script>

<plus-accordion>
  <plus-stack slot="summary" justify-content="space-between">
    <span>Summary</span>
    <button>Action</button>
  </plus-stack>
  <plus-faker></plus-faker>
</plus-accordion>

<style>
  [slot='summary'] {
    flex-grow: 1;
    margin-right: 1rem;
  }
</style>
