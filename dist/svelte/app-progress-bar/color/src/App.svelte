<script>
  import { onMount } from 'svelte';

  import '@htmlplus/ui/app-progress-bar.js';

  let appProgressBarRef;
  onMount(() => {
    requestAnimationFrame(() => {
      appProgressBarRef?.start();
    });
    setTimeout(() => {
      appProgressBarRef?.done();
    }, 5000);
  });
</script>

<plus-app-progress-bar color="#d63939" bind:this={appProgressBarRef}></plus-app-progress-bar>

<style>
  plus-app-progress-bar {
    /* This style is for demonstration purposes only and not for actual projects */
    position: static;
  }
</style>
