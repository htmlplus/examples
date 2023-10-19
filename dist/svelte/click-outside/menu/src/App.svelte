<script>
  import '@htmlplus/core/card-body.js';
  import '@htmlplus/core/card.js';
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/click-outside.js';

  let hidden = true;
  function onClick() {
    hidden = !hidden;
  }
  function onPlusClickOutside() {
    hidden = true;
  }
</script>

<plus-center>
  <plus-click-outside on:plus-click-outside={onPlusClickOutside}>
    <button on:click={onClick}>Open Menu Dropdown</button>
    <plus-card elevation={10} {hidden} outlined>
      <plus-card-body> It will stay visible until you click outside. </plus-card-body>
    </plus-card>
  </plus-click-outside>
</plus-center>

<style>
  plus-card {
    position: absolute;
    top: calc(100% + 0.25rem);
  }
  plus-click-outside {
    display: inline-block;
    position: relative;
  }
</style>
