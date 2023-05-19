<script>
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/floating.js';
  import '@htmlplus/core/icon.js';
  let offset = [20, 20];
</script>

<div>
  <plus-faker api="lorem.paragraphs"></plus-faker>
  <plus-floating offset="{offset}">
    <plus-icon name="circle-fill"></plus-icon>
  </plus-floating>
</div>

<style>
  div {
    position: relative;
  }
</style>
