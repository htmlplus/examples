<script>
  import '@htmlplus/ui/card.js';
  import '@htmlplus/ui/drawer-toggler.js';
  import '@htmlplus/ui/drawer.js';
</script>

<div>
  <plus-drawer animation size="200px" connector="drawer-default">
    <plus-card>Drawer Content</plus-card>
  </plus-drawer>
  <plus-card>
    <plus-drawer-toggler connector="drawer-default">Toggle</plus-drawer-toggler>
  </plus-card>
</div>

<style>
  div {
    display: flex;
  }
  plus-card {
    --plus-card-background-color: lightgray;
    padding: 10rem 0;
    text-align: center;
    flex-grow: 1;
  }
  plus-drawer plus-card {
    --plus-card-background-color: lightblue;
    margin-right: 0.5rem;
  }
</style>
