<script>
  import '@htmlplus/ui/progress-bar.js';
</script>

<plus-progress-bar value={50} color="primary"></plus-progress-bar>
<br />
<plus-progress-bar value={30} color="secondary"></plus-progress-bar>
<br />
<plus-progress-bar value={70} color="tertiary"></plus-progress-bar>

<style>
  plus-progress-bar[color='primary'] {
    --plus-progress-bar-current-background-color: #00bfff;
  }
  plus-progress-bar[color='secondary'] {
    --plus-progress-bar-current-background-color: #7cfc00;
  }
  plus-progress-bar[color='tertiary'] {
    --plus-progress-bar-current-background-color: #ff1493;
  }
</style>
