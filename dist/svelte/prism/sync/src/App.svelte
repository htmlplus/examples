<script>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/prism.js';
  import '@htmlplus/ui/stack.js';

  let prism2Ref;
  let prism1Ref;
  function onClick() {
    prism1Ref.innerHTML = `const now = ${Date.now()};`;
    prism2Ref.innerHTML = `const now = ${Date.now()};`;
  }
</script>

<plus-stack gap="0.5rem" items="stretch" vertical>
  <plus-prism bind:this={prism1Ref}>const now = 0;</plus-prism>
  <plus-prism sync bind:this={prism2Ref}>const now = 0;</plus-prism>
  <plus-center>
    <button on:click={onClick}>Change</button>
  </plus-center>
</plus-stack>
