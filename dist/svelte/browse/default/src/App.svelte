<script>
  import '@htmlplus/core/browse.js';
  import '@htmlplus/core/center.js';

  function onPlusChange(event) {
    console.log(event.detail);
  }
</script>

<plus-center>
  <plus-browse on:plus-change={onPlusChange}> Click Here </plus-browse>
</plus-center>
