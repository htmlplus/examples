<script>
  import '@htmlplus/ui/sticky.js';
</script>

<div class="container">
  <plus-sticky>A</plus-sticky>
  <p>A</p>
  <plus-sticky>B</plus-sticky>
  <p>B</p>
  <plus-sticky>C</plus-sticky>
  <p>C</p>
  <plus-sticky>D</plus-sticky>
  <p>D</p>
  <plus-sticky>E</plus-sticky>
  <p>E</p>
  <plus-sticky>F</plus-sticky>
  <p>F</p>
</div>

<style>
  .container {
    height: 20rem;
    overflow: auto;
  }
  p {
    color: lightgray;
    font-size: 10rem;
    line-height: 2;
    text-align: center;
  }
  plus-sticky {
    background-color: lightgray;
    padding: 0.5rem 1rem;
  }
</style>
