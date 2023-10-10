<script>
  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/animation/names/attention-seekers/heart-beat.js';
  import '@htmlplus/core/intersection.js';

  let animationRef;
  function onPlusChange(event) {
    animationRef.run = event.detail.isIntersecting;
  }
</script>

<div class="container">
  <plus-intersection on:plus-change={onPlusChange}>
    <plus-animation name="heart-beat" bind:this={animationRef}></plus-animation>
  </plus-intersection>
</div>

<style>
  plus-animation {
    background: lightgray;
    width: 100px;
    height: 100px;
    margin: auto;
  }
  plus-intersection {
    display: block;
    text-align: center;
    margin: 1000px auto;
  }
  .container {
    position: relative;
    height: 20rem;
    overflow: auto;
    background-color: whitesmoke;
  }
</style>
