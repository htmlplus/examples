<script>
  import '@htmlplus/core/browse.js';
  import '@htmlplus/core/center.js';

  function onPlusChange(event) {
    alert(`${event.detail.files.length} file(s) are selected.`);
  }
</script>

<plus-center>
  <plus-browse multiple on:plus-change={onPlusChange}>Click Here</plus-browse>
</plus-center>
