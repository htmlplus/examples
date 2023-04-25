<script>
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/portal.js';
</script>

<div id="target"></div>
<div id="source">
  <plus-portal target="#target">
    <plus-faker></plus-faker>
  </plus-portal>
</div>

<style>
  #target {
    color: blue;
  }
  #source {
    color: red;
  }
</style>
