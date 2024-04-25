<script>
  import '@htmlplus/ui/browse.js';
  import '@htmlplus/ui/center.js';

  function onPlusChange(event) {
    console.log(event.detail);
  }
</script>

<plus-center>
  <plus-browse on:plus-change={onPlusChange}>Click Here</plus-browse>
</plus-center>
