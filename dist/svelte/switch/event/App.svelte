<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/switch.js';
  function onChange(event) {
    window.alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  }
</script>

<plus-center>
  <plus-switch on:plus-change="{event => onChange(event)}"></plus-switch>
</plus-center>
