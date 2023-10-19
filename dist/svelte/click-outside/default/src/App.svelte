<script>
  import '@htmlplus/core/card-body.js';
  import '@htmlplus/core/card.js';
  import '@htmlplus/core/click-outside.js';

  let outsideRef;
  let insideRef;
  let inside = 0;
  let outside = 0;
  function onClick() {
    const count = inside + 1;
    inside = count;
    insideRef.innerHTML = `${count}`;
  }
  function onPlusClickOutside() {
    const count = outside + 1;
    outside = count;
    outsideRef.innerHTML = `${count}`;
  }
</script>

<plus-click-outside on:click={onClick} on:plus-click-outside={onPlusClickOutside}>
  <plus-card elevation={10}>
    <plus-card-body>
      <b bind:this={insideRef}>0</b> time(s) inside clicked
      <br />
      <b bind:this={outsideRef}>0</b> time(s) outside clicked
    </plus-card-body>
  </plus-card>
</plus-click-outside>
