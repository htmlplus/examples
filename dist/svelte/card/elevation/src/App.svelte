<script>
  import '@htmlplus/ui/card.js';

  let elevation = 24;
  function onChange(event) {
    elevation = event.target.value;
  }
</script>

<plus-card {elevation}></plus-card>
<br />
<input type="range" min="1" max="24" on:change={onChange} />

<style>
  plus-card {
    height: 12rem;
    width: 12rem;
    margin: auto;
  }
  input[type='range'] {
    display: block;
    width: 12rem;
    margin: auto;
  }
</style>
