<script>
  import '@htmlplus/ui/aspect-ratio.js';
  import '@htmlplus/ui/card-body.js';
  import '@htmlplus/ui/card.js';
</script>

<plus-aspect-ratio value="16/9">
  <plus-card tile>
    <plus-card-body>
      This box will always be 16/9 (unless you put more stuff in it)
    </plus-card-body>
  </plus-card>
</plus-aspect-ratio>

<style>
  plus-card {
    --plus-card-background-color: lightgray;
  }
</style>
