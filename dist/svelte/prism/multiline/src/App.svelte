<script>
  import { onMount } from 'svelte';

  import '@htmlplus/ui/prism.js';

  let prismRef;
  onMount(() => {
    requestAnimationFrame(() => {
      prismRef.innerHTML =
        'class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  sayHello() {\n    console.log(`Hello, my name is ${this.name}`);\n  }\n}';
    });
  });
</script>

<plus-prism sync bind:this={prismRef}></plus-prism>
