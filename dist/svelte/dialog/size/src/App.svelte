<script>
  import '@htmlplus/ui/dialog-body.js';
  import '@htmlplus/ui/dialog-content.js';
  import '@htmlplus/ui/dialog-footer.js';
  import '@htmlplus/ui/dialog-header.js';
  import '@htmlplus/ui/dialog-toggler.js';
  import '@htmlplus/ui/dialog.js';
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/stack.js';

  let dialogRef;
  const show = (size) => {
    dialogRef.size = size;
    dialogRef.open = true;
  };
</script>

<plus-stack gap="1rem">
  <button on:click={() => show('sm')}>Small</button>
  <button on:click={() => show('md')}>Medium</button>
  <button on:click={() => show('lg')}>Large</button>
  <button on:click={() => show('xl')}>Extra Large</button>
</plus-stack>
<plus-dialog animation connector="dialog-size" bind:this={dialogRef}>
  <plus-dialog-content>
    <plus-dialog-header>Dialog Title</plus-dialog-header>
    <plus-dialog-body>
      <plus-faker></plus-faker>
    </plus-dialog-body>
    <plus-dialog-footer>
      <plus-dialog-toggler>Close</plus-dialog-toggler>
    </plus-dialog-footer>
  </plus-dialog-content>
</plus-dialog>
