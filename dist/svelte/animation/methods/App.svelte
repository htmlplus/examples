<script>
  import '@htmlplus/core/animation.js';
</script>

<div class="center">
  <plus-animation id="element2" iterations="3" name="fade-out"></plus-animation>
  <br />
  <button on:click="{() => window.element2.cancel()}">Cancel</button>
  <button on:click="{() => window.element2.finish()}">Finish</button>
  <button on:click="{() => window.element2.pause()}">Pause</button>
  <button on:click="{() => window.element2.play()}">Play</button>
</div>

<style>
  button {
    margin: 0 0.5rem;
  }
  plus-animation {
    background: lightgray;
    width: 100px;
    height: 100px;
    margin: auto;
  }
  .center {
    text-align: center;
  }
</style>
