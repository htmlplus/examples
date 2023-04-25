<script>
  import '@htmlplus/core/breadcrumb.js';
  import '@htmlplus/core/center.js';
</script>

<plus-center>
  <plus-breadcrumb separator="-">
    <a href="#">First</a>
    <a href="#">Second</a>
    <a href="#">Third</a>
    <a href="#">Fourth</a>
    <a href="#">Fifth</a>
  </plus-breadcrumb>
</plus-center>

<style>
  plus-breadcrumb a {
    color: inherit;
    text-decoration: none;
  }
  plus-breadcrumb a:hover {
    text-decoration: underline;
  }
</style>
