<script>
  import '@htmlplus/ui/animation.js';

  const keyframes = [
    {
      transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',
      opacity: '1'
    },
    {
      transform: 'scale(7) rotate(960deg) translate(-50%, -50%)',
      opacity: '0'
    }
  ];
</script>

<div class="root">
  <plus-animation duration={5000} iterations={Infinity} run {keyframes}></plus-animation>
</div>

<style>
  .root {
    padding: 5rem 0;
    position: relative;
  }
  plus-animation {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1rem;
    border: solid 1px red;
    transform-origin: top left;
  }
</style>
