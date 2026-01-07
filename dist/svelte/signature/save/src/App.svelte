<script>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/signature.js';
  import '@htmlplus/ui/stack.js';

  let signatureRef;
  function onClick1() {
    console.log(signatureRef.toDataURL());
  }
  function onClick2() {
    console.log(signatureRef.toSVG());
  }
  function onClick3() {
    console.log(signatureRef.value);
  }
</script>

<plus-center>
  <plus-signature bind:this={signatureRef}></plus-signature>
</plus-center>
<br />
<plus-stack gap="0.5rem">
  <button on:click={onClick1}>To Data URL</button>
  <button on:click={onClick2}>To SVG</button>
  <button on:click={onClick3}>Get Value</button>
</plus-stack>
