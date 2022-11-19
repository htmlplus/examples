<script>
  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/intersection.js';
  import '@htmlplus/core/animation/names/attention-seekers/heart-beat.js';
  let run = false;
  function onChange(event) {
    run = event.detail.isIntersecting;
  }
</script>

<div class="container">
  <plus-intersection on:plus-change="{event => onChange(event)}">
    <plus-animation name="heart-beat" run="{run}"></plus-animation>
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
    text-align: center;
    margin: 1000px auto;
  }
  .container {
    position: relative;
    height: 20rem;
    overflow: auto;
    background-color: #eeeeee;
  }
</style>
