<script>
  import '@htmlplus/ui/app-progress-bar.js';
  import '@htmlplus/ui/stack.js';

  let appProgressBarRef;
  function onClick1() {
    appProgressBarRef.start();
  }
  function onClick2() {
    appProgressBarRef.set(0.4);
  }
  function onClick3() {
    appProgressBarRef.increase();
  }
  function onClick4() {
    appProgressBarRef.trickle();
  }
  function onClick5() {
    appProgressBarRef.done();
  }
  function onClick6() {
    appProgressBarRef.done(true);
  }
</script>

<plus-app-progress-bar bind:this={appProgressBarRef}></plus-app-progress-bar>
<br />
<plus-stack gap="0.5rem">
  <button on:click={onClick1}>Start</button>
  <button on:click={onClick2}>Set</button>
  <button on:click={onClick3}>Increase</button>
  <button on:click={onClick4}>Trickle</button>
  <button on:click={onClick5}>Done</button>
  <button on:click={onClick6}>Force Done</button>
</plus-stack>

<style>
  plus-app-progress-bar {
    /* This style is for demonstration purposes only and not for actual projects */
    position: static;
  }
</style>
