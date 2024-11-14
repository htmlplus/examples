<script>
  import { onMount } from 'svelte';

  import '@htmlplus/ui/app-progress-bar.js';

  let appProgressBar3Ref;
  let appProgressBar2Ref;
  let appProgressBar1Ref;
  onMount(() => {
    requestAnimationFrame(() => {
      appProgressBar1Ref.start();
      appProgressBar2Ref.start();
      appProgressBar3Ref.start();
    });
  });
</script>

<plus-app-progress-bar trickle-rate={0.075} trickle-speed={250} bind:this={appProgressBar1Ref}
></plus-app-progress-bar>
<br />
<plus-app-progress-bar trickle-rate={0.05} trickle-speed={500} bind:this={appProgressBar2Ref}
></plus-app-progress-bar>
<br />
<plus-app-progress-bar trickle-rate={0.025} trickle-speed={750} bind:this={appProgressBar3Ref}
></plus-app-progress-bar>

<style>
  plus-app-progress-bar {
    /* This style is for demonstration purposes only and not for actual projects */
    position: static;
  }
</style>
