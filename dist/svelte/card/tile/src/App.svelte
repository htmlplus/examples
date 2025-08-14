<script>
  import '@htmlplus/ui/card.js';
  import '@htmlplus/ui/stack.js';
</script>

<plus-stack gap="1rem" justify="evenly" wrap>
  <plus-card tile></plus-card>
  <plus-card tile outlined></plus-card>
  <plus-card tile elevation={5}></plus-card>
</plus-stack>

<style>
  .container {
    padding: 2rem 0;
    background-color: whitesmoke;
  }
  plus-card {
    height: 8rem;
    width: 8rem;
  }
</style>
