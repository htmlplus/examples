<script>
  import '@htmlplus/ui/card-body.js';
  import '@htmlplus/ui/card.js';
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/intersection.js';
  import '@htmlplus/ui/sticky.js';

  let statusRef;
  function onPlusChange(event) {
    statusRef.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';
  }
</script>

<div class="container">
  <plus-sticky top="1rem" z-index={1}>
    <plus-center>
      <div class="status" bind:this={statusRef}></div>
    </plus-center>
  </plus-sticky>
  <plus-intersection on:plus-change={onPlusChange}>
    <plus-card elevation={10}>
      <plus-card-body>
        <plus-faker></plus-faker>
      </plus-card-body>
    </plus-card>
  </plus-intersection>
</div>

<style>
  .container {
    background-color: whitesmoke;
    height: 20rem;
    overflow: auto;
  }

  .status {
    color: white;
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
