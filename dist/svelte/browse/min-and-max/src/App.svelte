<script>
  import '@htmlplus/ui/browse.js';
  import '@htmlplus/ui/center.js';

  function onPlusChange(event) {
    if (event.detail.error) {
      alert(event.detail.error.message);
    }
  }
</script>

<plus-center>
  <plus-browse min={3} max={5} multiple on:plus-change={onPlusChange}> Click Here </plus-browse>
</plus-center>
