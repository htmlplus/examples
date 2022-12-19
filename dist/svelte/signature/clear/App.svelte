<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/signature.js';
</script>

<plus-center>
  <plus-signature id="signature1" background-color="lightgray"></plus-signature>
</plus-center>
<br />
<plus-center>
  <button on:click="{() => window.signature1.clear()}">Clear</button>
</plus-center>
