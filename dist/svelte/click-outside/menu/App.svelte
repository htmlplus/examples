<script>
  import '@htmlplus/core/click-outside.js';
  let open = false;
  function onClick() {
    open = !open;
  }
  function onClickOutside() {
    open = false;
  }
</script>

<plus-click-outside on:plus-click-outside="{() => onClickOutside()}">
  <button on:click="{() => onClick()}">Open Menu Dropdown</button>
  {#if open}
  <div>Click me, I will stay visible until you click outside.</div>
  {/if}
</plus-click-outside>

<style>
  plus-click-outside {
    display: inline-block;
    position: relative;
  }
  #menu {
    border: solid 1px gray;
    position: absolute;
    top: calc(100% + 0.25rem);
    padding: 10px;
  }
</style>
