<script>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/signature.js';

  let signatureRef;
  function onClick() {
    signatureRef.value = '';
  }
</script>

<plus-center>
  <plus-signature bind:this={signatureRef}></plus-signature>
</plus-center>
<br />
<plus-center>
  <button on:click={onClick}>Clear</button>
</plus-center>
