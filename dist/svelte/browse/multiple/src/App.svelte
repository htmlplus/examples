<script>
  import '@htmlplus/ui/browse.js';
  import '@htmlplus/ui/center.js';

  function onPlusChange(event) {
    alert(`${event.detail.files.length} file(s) are selected.`);
  }
</script>

<plus-center>
  <plus-browse multiple on:plus-change={onPlusChange}>Click Here</plus-browse>
</plus-center>
