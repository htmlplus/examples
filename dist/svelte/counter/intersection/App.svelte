<script>
  import '@htmlplus/core/counter.js';
  import '@htmlplus/core/intersection.js';

  let counterRef;
  function onPlusChange(event) {
    counterRef.play = event.detail.isIntersecting;
  }
</script>

<div class="container">
  <plus-intersection on:plus-change={onPlusChange}>
    <plus-counter to={1000} bind:this={counterRef}></plus-counter>
  </plus-intersection>
</div>

<style>
  plus-intersection {
    display: block;
    text-align: center;
    margin: 25rem auto;
  }
  .container {
    position: relative;
    height: 20rem;
    overflow: auto;
    background-color: whitesmoke;
  }
</style>
