<script>
  import '@htmlplus/core/accordion.js';
  import '@htmlplus/core/faker.js';
  function ensure(type, event) {
    if (window.confirm(`Are you sure you want to ${type} it?`)) return;
    event.preventDefault();
  }
</script>

<plus-accordion
  summary="Summary"
  on:plus-collapse="{event => ensure('collapse', event)}"
  on:plus-expand="{event => ensure('expand', event)}"
>
  <plus-faker></plus-faker>
</plus-accordion>
