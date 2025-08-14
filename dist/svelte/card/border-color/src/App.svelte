<script>
  import '@htmlplus/ui/card.js';
  import '@htmlplus/ui/stack.js';
</script>

<plus-stack gap="1rem" justify="evenly" wrap>
  <plus-card class="pink" outlined></plus-card>
  <plus-card class="yellow" outlined></plus-card>
  <plus-card class="blue" outlined></plus-card>
</plus-stack>

<style>
  plus-card {
    height: 8rem;
    width: 8rem;
  }
  plus-card.pink {
    --plus-card-border-color: #ef9a9a;
  }
  plus-card.yellow {
    --plus-card-border-color: #fff59d;
  }
  plus-card.blue {
    --plus-card-border-color: #80cbc4;
  }
</style>
