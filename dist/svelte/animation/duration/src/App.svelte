<script>
  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/center.js';
</script>

<plus-center>
  <plus-animation duration={2500} iterations={Infinity} name="fade-in" run></plus-animation>
</plus-center>

<style>
  plus-animation {
    background: lightgray;
    width: 100px;
    height: 100px;
  }
</style>
