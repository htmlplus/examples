<script>
  import { onMount } from 'svelte';

  import '@htmlplus/ui/app-progress-bar.js';

  let appProgressBar3Ref;
  let appProgressBar2Ref;
  let appProgressBar1Ref;
  onMount(() => {
    requestAnimationFrame(() => {
      appProgressBar1Ref?.start();
      appProgressBar2Ref?.start();
      appProgressBar3Ref?.start();
    });
  });
</script>

<plus-app-progress-bar minimum={0.25} trickle-disabled bind:this={appProgressBar1Ref}
></plus-app-progress-bar>
<br />
<plus-app-progress-bar minimum={0.5} trickle-disabled bind:this={appProgressBar2Ref}
></plus-app-progress-bar>
<br />
<plus-app-progress-bar minimum={0.75} trickle-disabled bind:this={appProgressBar3Ref}
></plus-app-progress-bar>

<style>
  plus-app-progress-bar {
    /* This style is for demonstration purposes only and not for actual projects */
    position: static;
  }
</style>
