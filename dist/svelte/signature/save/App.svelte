<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/signature.js';
  function save(background) {
    const image = new Image();
    image.src = window.signature3.toDataURL('image/svg+xml', background);
    const tab = window.open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  }
</script>

<plus-center>
  <plus-signature id="signature3" background-color="lightgray"></plus-signature>
</plus-center>
<br />
<plus-center>
  <button on:click="{() => save(true)}">Save With Background</button>
  &nbsp; &nbsp;
  <button on:click="{() => save(false)}">Save Without Background</button>
</plus-center>
