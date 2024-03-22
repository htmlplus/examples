<script>
  import '@htmlplus/ui/browse.js';
  import '@htmlplus/ui/center.js';

  function onPlusChange() {
    alert('File selected.');
  }
</script>

<plus-center>
  <plus-browse disabled on:plus-change={onPlusChange}> Click Here </plus-browse>
</plus-center>
