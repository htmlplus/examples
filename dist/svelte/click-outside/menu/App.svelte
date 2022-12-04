<script>
  import '@htmlplus/core/card.js';
  import '@htmlplus/core/card-body.js';
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/click-outside.js';
  let open = false;
  function onClick() {
    open = !open;
  }
  function onClickOutside() {
    open = false;
  }
</script>

<plus-center>
  <plus-click-outside on:plus-click-outside="{() => onClickOutside()}">
    <button on:click="{() => onClick()}">Open Menu Dropdown</button>
    {#if open}<plus-card elevation="10" id="menu" outlined>
      <plus-card-body>
        Click me, I will stay visible until you click outside.
      </plus-card-body>
    </plus-card>
    {/if}
  </plus-click-outside>
</plus-center>

<style>
  plus-click-outside {
    display: inline-block;
    position: relative;
  }
  plus-card {
    position: absolute;
    top: calc(100% + 0.25rem);
  }
</style>
