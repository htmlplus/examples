<script>
  import '@htmlplus/ui/avatar-group.js';
  import '@htmlplus/ui/avatar.js';
  import '@htmlplus/ui/center.js';
</script>

<plus-center>
  <plus-avatar-group>
    <plus-avatar></plus-avatar>
    <plus-avatar></plus-avatar>
    <plus-avatar></plus-avatar>
  </plus-avatar-group>
</plus-center>
<br />
<plus-center>
  <plus-avatar-group stacked>
    <plus-avatar></plus-avatar>
    <plus-avatar></plus-avatar>
    <plus-avatar></plus-avatar>
  </plus-avatar-group>
</plus-center>

<style>
  plus-avatar-group {
    --plus-avatar-group-gutter-stacked: -2rem;
    --plus-avatar-group-gutter-unstacked: 2rem;
  }
</style>
