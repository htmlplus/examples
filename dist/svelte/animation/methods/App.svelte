<script>
  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/center.js';
</script>

<plus-center>
  <plus-animation id="element2" iterations="3" name="fade-out"></plus-animation>
</plus-center>
<br />
<plus-center>
  <button on:click="{() => window.element2.cancel()}">Cancel</button>
  <button on:click="{() => window.element2.finish()}">Finish</button>
  <button on:click="{() => window.element2.pause()}">Pause</button>
  <button on:click="{() => window.element2.play()}">Play</button>
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
