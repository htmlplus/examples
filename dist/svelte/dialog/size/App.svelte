<script>
  import '@htmlplus/core/dialog.js';
  import '@htmlplus/core/dialog-body.js';
  import '@htmlplus/core/dialog-content.js';
  import '@htmlplus/core/dialog-footer.js';
  import '@htmlplus/core/dialog-header.js';
  import '@htmlplus/core/stack.js';
  let open = false;
  let size = 'md';
  function hide() {
    open = false;
  }
  function show(size) {
    size = size;
    open = true;
  }
</script>

<plus-stack gap="1rem">
  <button on:click="{() => show('sm')}">Small dialog</button>
  <button on:click="{() => show('lg')}">Large dialog</button>
  <button on:click="{() => show('xl')}">Extra large dialog</button>
</plus-stack>
<plus-dialog
  animation="fade"
  open="{open}"
  size="{size}"
  on:plus-close="{() => hide()}"
>
  <plus-dialog-content>
    <plus-dialog-header>Dialog Title</plus-dialog-header>
    <plus-dialog-body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </plus-dialog-body>
    <plus-dialog-footer>
      <button on:click="{() => hide()}">Close</button>
    </plus-dialog-footer>
  </plus-dialog-content>
</plus-dialog>
