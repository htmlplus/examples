<script>
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/scroll-detector.js';
  function onChange(event) {
    console.log(event.detail);
  }
</script>

<div class="container">
  <div class="scrollable">
    <plus-faker type="lorem.paragraphs" arguments='[20, "\n\n"]'></plus-faker>
  </div>
  <plus-scroll-detector
    source=".scrollable"
    vertical
    on:plus-change="{event => onChange(event)}"
  >
  </plus-scroll-detector>
</div>

<style>
  .container {
    position: relative;
  }
  .scrollable {
    height: 20em;
    overflow-y: auto;
  }
</style>
