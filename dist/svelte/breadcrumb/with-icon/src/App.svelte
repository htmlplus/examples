<script>
  import '@htmlplus/ui/breadcrumb.js';
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/icon.js';
</script>

<plus-center>
  <plus-breadcrumb separator="/">
    <div>
      <plus-icon name="house"></plus-icon>
      &nbsp;
      <a href="#">HTMLPLUS</a>
    </div>
    <div>
      <plus-icon name="brush"></plus-icon>
      &nbsp;
      <a href="#">UI</a>
    </div>
    <div>
      <plus-icon name="puzzle"></plus-icon>
      &nbsp;
      <a href="#">Elements</a>
    </div>
    <div>Breadcrumb</div>
  </plus-breadcrumb>
</plus-center>

<style>
  plus-breadcrumb a {
    color: inherit;
    text-decoration: none;
    vertical-align: middle;
  }
  plus-breadcrumb a:hover {
    text-decoration: underline;
  }
</style>
