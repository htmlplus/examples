<script>
  import '@htmlplus/ui/divider.js';
  import '@htmlplus/ui/faker.js';
</script>

<plus-divider>
  <span>
    <plus-icon name="tag"></plus-icon>
    &nbsp; Description
  </span>
</plus-divider>
<plus-faker></plus-faker>

<style>
  plus-divider {
    gap: 1rem;
    color: rgb(238, 110, 115);
    margin-bottom: 1rem;
  }
  plus-divider::part(line) {
    border-color: rgba(238, 110, 115, 0.25);
  }
</style>
