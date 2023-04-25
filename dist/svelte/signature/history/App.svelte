<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/signature.js';
  import '@htmlplus/core/stack.js';
  let canUndo = false;
  let canRedo = false;
  function sync() {
    canUndo = window.signature2.canUndo();
    canRedo = window.signature2.canRedo();
  }
  function onUndo() {
    window.signature2.undo();
    sync();
  }
  function onRedo() {
    window.signature2.redo();
    sync();
  }
  function onPlusEnd() {
    sync();
  }
</script>

<plus-center>
  <plus-signature
    id="signature2"
    background-color="lightgray"
    on:plus-end="{() => onPlusEnd()}"
  ></plus-signature>
</plus-center>
<br />
<plus-stack gap="1rem">
  <button disabled="{!canUndo}" on:click="{() => onUndo()}">Undo</button>
  <button disabled="{!canRedo}" on:click="{() => onRedo()}">Redo</button>
</plus-stack>
