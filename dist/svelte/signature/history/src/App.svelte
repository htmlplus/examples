<script>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/signature.js';
  import '@htmlplus/ui/stack.js';

  let signatureRef;
  let disabled2 = true;
  let disabled1 = true;
  const sync = () => {
    disabled1 = !signatureRef.undoable;
    disabled2 = !signatureRef.redoable;
  };
  function onClick1() {
    signatureRef.undo();
    sync();
  }
  function onClick2() {
    signatureRef.redo();
    sync();
  }
  function onPlusEnd() {
    sync();
  }
</script>

<plus-center>
  <plus-signature on:plus-end={onPlusEnd} bind:this={signatureRef}></plus-signature>
</plus-center>
<br />
<plus-stack gap="1rem">
  <button disabled={disabled1} on:click={onClick1}>Undo</button>
  <button disabled={disabled2} on:click={onClick2}>Redo</button>
</plus-stack>
