<script>
  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/animation/names/attention-seekers/tada.js';
  import '@htmlplus/core/center.js';

  let animationRef;
  function onClick() {
    animationRef.run = true;
  }
</script>

<plus-center>
  <plus-animation name="tada" bind:this={animationRef}>
    <button on:click={onClick}>Click Me</button>
  </plus-animation>
</plus-center>

<style>
  plus-animation {
    display: inline-block;
  }
</style>
