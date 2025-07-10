<script>
  import '@htmlplus/ui/animation.js';
  import '@htmlplus/ui/animation/names/flippers/flip-in-x.js';
  import '@htmlplus/ui/animation/names/flippers/flip-in-y.js';
  import '@htmlplus/ui/stack.js';
</script>

<plus-stack
  gap="1rem"
  justify="evenly"
  override={{
    'sm-down': {
      vertical: true
    },
    'sm-and-up': {
      vertical: false
    }
  }}
>
  <plus-animation iterations={Infinity} name="flip-in-x" run></plus-animation>
  <plus-animation iterations={Infinity} name="flip-in-y" run></plus-animation>
</plus-stack>

<style>
  plus-animation {
    background: lightgray;
    width: 100px;
    height: 100px;
  }
</style>
