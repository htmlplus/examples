<script>
  import { onMount } from 'svelte';

  import '@htmlplus/ui/app-progress-bar.js';

  let appProgressBarRef;
  onMount(() => {
    requestAnimationFrame(() => {
      appProgressBarRef.start();
    });
    setTimeout(() => {
      appProgressBarRef.done();
    }, 1500);
  });
</script>

<plus-app-progress-bar bind:this={appProgressBarRef}></plus-app-progress-bar>

<style>
  plus-app-progress-bar {
    /* This style is for demonstration purposes only and not for actual projects */
    position: static;
  }
</style>
