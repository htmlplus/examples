<script>
  import '@htmlplus/core/animation.js';
  import '@htmlplus/core/animation/names/attention-seekers/tada.js';
</script>

<div class="center">
  <plus-animation id="animation1" name="tada">
    <button on:click="{() => window.animation1.run = true}">Click Me</button>
  </plus-animation>
</div>

<style>
  .center {
    text-align: center;
  }
  plus-animation {
    display: inline-block;
  }
</style>
