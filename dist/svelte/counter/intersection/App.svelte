<script>
  import '@htmlplus/core/counter.js';
  import '@htmlplus/core/intersection.js';
  let play = false;
  function onChange(event) {
    play = event.detail.isIntersecting;
  }
</script>

<div class="container">
  <plus-intersection on:plus-change="{event => onChange(event)}">
    <plus-counter to="50000" play="{play}"></plus-counter>
  </plus-intersection>
</div>

<style>
  plus-intersection {
    text-align: center;
    margin: 25rem auto;
  }
  .container {
    position: relative;
    height: 20rem;
    overflow: auto;
    background-color: #eeeeee;
  }
</style>
