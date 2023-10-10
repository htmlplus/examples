<script>
  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/center.js';

  let animationRef;
  function onClick1() {
    animationRef.cancel();
  }
  function onClick2() {
    animationRef.finish();
  }
  function onClick3() {
    animationRef.pause();
  }
  function onClick4() {
    animationRef.play();
  }
</script>

<plus-center>
  <plus-animation iterations={3} name="fade-out" bind:this={animationRef}></plus-animation>
</plus-center>
<br />
<plus-center>
  <button on:click={onClick1}>Cancel</button>
  <button on:click={onClick2}>Finish</button>
  <button on:click={onClick3}>Pause</button>
  <button on:click={onClick4}>Play</button>
</plus-center>

<style>
  button {
    margin: 0 0.5rem;
  }
  plus-animation {
    background: lightgray;
    width: 100px;
    height: 100px;
  }
</style>
