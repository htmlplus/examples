<script>
  import '@htmlplus/ui/animation.js';
  import '@htmlplus/ui/animation/names/flippers/flip-in-x.js';
  import '@htmlplus/ui/animation/names/flippers/flip-in-y.js';
  import '@htmlplus/ui/grid-item.js';
  import '@htmlplus/ui/grid.js';
</script>

<plus-grid justify-content="evenly" gutter="md">
  <plus-grid-item xs="12" sm="auto">
    <plus-animation iterations={Infinity} name="flip-in-x" run></plus-animation>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="auto">
    <plus-animation iterations={Infinity} name="flip-in-y" run></plus-animation>
  </plus-grid-item>
</plus-grid>

<style>
  plus-animation {
    background: lightgray;
    width: 100px;
    height: 100px;
    margin: auto;
  }
</style>
