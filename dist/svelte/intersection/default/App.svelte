<script>
  import '@htmlplus/core/card.js';
  import '@htmlplus/core/card-body.js';
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/intersection.js';
  import '@htmlplus/core/sticky.js';
  let intersecting = false;
  function onChange(event) {
    intersecting = event.detail.isIntersecting;
  }
</script>

<div class="container">
  <plus-sticky top="1rem" z-index="1">
    <plus-center>
      <div class="status">
        {intersecting ? 'In Viewport' : 'Out of Viewport'}
      </div>
    </plus-center>
  </plus-sticky>
  <plus-intersection on:plus-change="{event => onChange(event)}">
    <plus-card elevation="10">
      <plus-card-body>
        <plus-faker></plus-faker>
      </plus-card-body>
    </plus-card>
  </plus-intersection>
</div>

<style>
  .container {
    background-color: #eeeeee;
    height: 20rem;
    overflow: auto;
  }

  .status {
    color: #fafafa;
    background-color: black;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
  }

  plus-card {
    width: 15rem;
    margin: auto;
  }

  plus-intersection {
    display: block;
    margin: 40rem auto;
  }
</style>
