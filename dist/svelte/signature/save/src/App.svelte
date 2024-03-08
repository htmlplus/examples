<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/signature.js';

  let signatureRef;
  function onClick() {
    const tab = open('', '_blank');
    setTimeout(() => {
      tab.document.write(signatureRef.value);
    }, 250);
  }
</script>

<plus-center>
  <plus-signature background-color="lightgray" bind:this={signatureRef}></plus-signature>
</plus-center>
<br />
<plus-center>
  <button on:click={onClick}>Save</button>
</plus-center>
