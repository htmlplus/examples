<script>
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/progress-bar.js';
  import '@htmlplus/core/scroll-detector.js';

  let value = 0;
  function onPlusChange(event) {
    value = event.detail.progress;
  }
</script>

<div class="container">
  <plus-progress-bar {value}></plus-progress-bar>
  <div class="scrollable reference2">
    <plus-faker api="lorem.paragraphs" arguments={[20, '\n\n']} seed={0}></plus-faker>
  </div>
  <plus-scroll-detector reference=".reference2" vertical on:plus-change={onPlusChange}
  ></plus-scroll-detector>
</div>

<style>
  .container {
    position: relative;
  }
  .scrollable {
    padding: 1rem;
    height: 20em;
    overflow-y: auto;
  }
</style>
