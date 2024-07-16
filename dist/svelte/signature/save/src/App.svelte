<script>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/signature.js';

  let signatureRef;
  function onClick() {
    const tab = open('', '_blank');
    setTimeout(() => {
      tab.document.write(signatureRef.value);
    }, 250);
  }
</script>

<plus-center>
  <plus-signature bind:this={signatureRef}></plus-signature>
</plus-center>
<br />
<plus-center>
  <button on:click={onClick}>Save</button>
</plus-center>
