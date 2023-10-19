<script>
  import '@htmlplus/core/divider.js';
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/grid-item.js';
  import '@htmlplus/core/grid.js';
</script>

<plus-grid align-items="center" justify-content="evenly">
  <plus-grid-item xs="5">
    <plus-faker></plus-faker>
  </plus-grid-item>
  <plus-divider vertical></plus-divider>
  <plus-grid-item xs="5">
    <plus-faker></plus-faker>
  </plus-grid-item>
</plus-grid>

<style>
  plus-divider {
    --plus-divider-color: darkgray;
    --plus-divider-width: 0.5rem;
    margin: 2rem 0;
  }
</style>
