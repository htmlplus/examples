<script>
  import '@htmlplus/core/counter.js';
  let play = false;
</script>

<div class="center">
  <plus-counter
    duration="2000"
    from="10000"
    to="50000"
    separator=","
    play="{play}"
    on:plus-complete="{() => play = false}"
  ></plus-counter>
  <br />
  <button on:click="{() => play = true}">Start</button>
</div>

<style>
  .center {
    text-align: center;
  }
  button {
    margin: 1rem 0.5rem;
  }
</style>
