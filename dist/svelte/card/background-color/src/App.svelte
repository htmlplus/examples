<script>
  import '@htmlplus/ui/card.js';
  import '@htmlplus/ui/stack.js';
</script>

<plus-stack gap="1rem" justify="evenly" wrap>
  <plus-card class="pink"></plus-card>
  <plus-card class="yellow"></plus-card>
  <plus-card class="blue"></plus-card>
</plus-stack>

<style>
  plus-card {
    height: 12rem;
    width: 12rem;
  }
  plus-card.pink {
    --plus-card-background-color: #ef9a9a;
  }
  plus-card.yellow {
    --plus-card-background-color: #fff59d;
  }
  plus-card.blue {
    --plus-card-background-color: #80cbc4;
  }
</style>
