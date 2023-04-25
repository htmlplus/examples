<script>
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/scroll-indicator.js';
</script>

<div class="container">
  <plus-scroll-indicator source=".scrollable"></plus-scroll-indicator>
  <div class="scrollable">
    <plus-faker api="lorem.paragraphs" arguments='[15, "\n\n"]'></plus-faker>
  </div>
</div>

<style>
  .container {
    position: relative;
  }

  .scrollable {
    height: 20em;
    overflow-y: auto;
  }

  plus-scroll-indicator {
    position: absolute;
    top: 0;
  }
</style>
