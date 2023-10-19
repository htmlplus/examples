<script>
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/sticky.js';
</script>

<div class="container">
  <plus-faker api="lorem.paragraphs"></plus-faker>
  <plus-sticky top="20px">
    <plus-faker></plus-faker>
  </plus-sticky>
  <plus-faker api="lorem.paragraphs" arguments={[20, '\n\n']}></plus-faker>
</div>

<style>
  .container {
    height: 20rem;
    overflow: auto;
  }
  plus-faker {
    display: block;
    padding: 1rem;
    text-align: justify;
  }
  plus-sticky {
    background-color: gold;
  }
</style>
