<script>
  import { onMount } from 'svelte';

  import '@htmlplus/ui/progress-bar.js';

  let latencyRef;
  let syncRef;
  function update() {
    if (!syncRef || !latencyRef) return;
    const value = Math.random() * 100;
    syncRef.value = value;
    latencyRef.value = value;
    setTimeout(() => update(), 100);
  }
  onMount(() => {
    update();
  });
</script>

<plus-progress-bar sync bind:this={syncRef}></plus-progress-bar>
<br />
<plus-progress-bar bind:this={latencyRef}></plus-progress-bar>
