<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/signature.js';
  import '@htmlplus/core/stack.js';

  let signatureRef;
  const save = (background) => {
    const image = new Image();
    image.src = signatureRef.toDataURL('image/svg+xml', background);
    const tab = open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  };
</script>

<plus-center>
  <plus-signature background-color="lightgray" bind:this={signatureRef}></plus-signature>
</plus-center>
<br />
<plus-stack gap="1rem">
  <button on:click={() => save(true)}>Save With Background</button>
  <button on:click={() => save(false)}>Save Without Background</button>
</plus-stack>
