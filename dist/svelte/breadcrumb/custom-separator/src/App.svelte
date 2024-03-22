<script>
  import '@htmlplus/ui/breadcrumb.js';
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/icon.js';
</script>

<plus-center>
  <plus-breadcrumb>
    <plus-icon slot="separator" name="caret-right-fill"></plus-icon>
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
