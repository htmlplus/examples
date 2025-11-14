<script>
  import '@htmlplus/ui/divider.js';
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/icon.js';
</script>

<plus-divider color="rgb(238, 110, 115)">
  <span>
    <plus-icon name="tag"></plus-icon>
    &nbsp; Description
  </span>
</plus-divider>
<br />
<plus-faker></plus-faker>

<style>
  plus-divider {
    gap: 1rem;
  }
  plus-divider::part(prefix) {
    border-image: linear-gradient(90deg, #00000000, hsl(from var(--plus-divider-color) h s 85%)) 1;
  }
  plus-divider::part(suffix) {
    border-image: linear-gradient(90deg, hsl(from var(--plus-divider-color) h s 85%), #00000000) 1;
  }
</style>
