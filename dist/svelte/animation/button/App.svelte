<script>
  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/animation/names/attention-seekers/tada.js';
</script>

<plus-center>
  <plus-animation id="animation1" name="tada">
    <button on:click="{() => window.animation1.run = true}">Click Me</button>
  </plus-animation>
</plus-center>

<style>
  plus-animation {
    display: inline-block;
  }
</style>
