<script>
  import '@htmlplus/ui/breadcrumb.js';
  import '@htmlplus/ui/icon.js';
</script>

<plus-breadcrumb block max={2}>
  <plus-icon slot="separator" name="arrow-right-short"></plus-icon>
  <a href="#">HTMLPLUS</a>
  <a href="#">UI</a>
  <a href="#">Elements</a>
  <a href="#">Breadcrumb</a>
</plus-breadcrumb>

<style>
  plus-breadcrumb {
    gap: 0.75em;
    background-color: lightgray;
    border-radius: 0.25em;
    padding: 0.75em;
  }
  plus-breadcrumb a {
    text-decoration: none;
    color: black;
  }
  plus-breadcrumb::part(expander) {
    background-color: transparent;
    color: black;
    height: 1em;
    width: 1em;
  }
  plus-breadcrumb::part(separator) {
    color: black;
    height: 0.75em;
    width: 0.75em;
  }
</style>
