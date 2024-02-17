<script>
  import '@htmlplus/core/browse.js';
  import '@htmlplus/core/center.js';

  function onPlusChange() {
    alert('File selected.');
  }
</script>

<plus-center>
  <plus-browse disabled on:plus-change={onPlusChange}> Click Here </plus-browse>
</plus-center>
