<script>
  import '@htmlplus/core/accordion.js';
  import '@htmlplus/core/faker.js';
  let open = 1;
  function expand(value) {
    open = value;
  }
</script>

<div>
  <plus-accordion
    summary="First"
    open="{open == 1}"
    on:plus-expand="{() => expand(1)}"
  >
    <plus-faker></plus-faker>
  </plus-accordion>
  <plus-accordion
    summary="Second"
    open="{open == 2}"
    on:plus-expand="{() => expand(2)}"
  >
    <plus-faker></plus-faker>
  </plus-accordion>
  <plus-accordion
    summary="Third"
    open="{open == 3}"
    on:plus-expand="{() => expand(3)}"
  >
    <plus-faker></plus-faker>
  </plus-accordion>
</div>
