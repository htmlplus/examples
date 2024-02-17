<script>
  import '@htmlplus/core/browse.js';
  import '@htmlplus/core/center.js';

  function onPlusChange(event) {
    if (event.detail.files?.[0]?.errors.length) {
      alert(event.detail.files[0].errors[0].message);
    }
  }
</script>

<plus-center>
  <plus-browse min-size={1000000} max-size={5000000} on:plus-change={onPlusChange}>
    Click Here
  </plus-browse>
</plus-center>
