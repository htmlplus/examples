<script>
  import '@htmlplus/core/icon.js';
  import '@htmlplus/core/stack.js';
</script>

<plus-stack gap="2rem">
  <plus-icon name="house" size="xs"></plus-icon>
  <plus-icon name="house" size="sm"></plus-icon>
  <plus-icon name="house" size="md"></plus-icon>
  <plus-icon name="house" size="lg"></plus-icon>
  <plus-icon name="house" size="xl"></plus-icon>
</plus-stack>

<style>
  plus-icon[size='xs'] {
    height: 1em;
    width: 1em;
  }
  plus-icon[size='sm'] {
    height: 1.25em;
    width: 1.25em;
  }
  plus-icon[size='md'] {
    height: 1.5em;
    width: 1.5em;
  }
  plus-icon[size='lg'] {
    height: 1.75em;
    width: 1.75em;
  }
  plus-icon[size='xl'] {
    height: 2em;
    width: 2em;
  }
</style>
