<script>
  import '@htmlplus/ui/aspect-ratio.js';
  import '@htmlplus/ui/card-body.js';
  import '@htmlplus/ui/card.js';
  import '@htmlplus/ui/center.js';
</script>

<plus-center>
  <plus-card outlined>
    <plus-card-body>
      <plus-aspect-ratio value="16/9">
        <div class="placeholder"></div>
      </plus-aspect-ratio>
      <h3>Title</h3>
      <p>Description of the card.</p>
    </plus-card-body>
  </plus-card>
</plus-center>

<style>
  plus-card {
    width: 300px;
  }
  .placeholder {
    background-color: lightgray;
    border-radius: 4px;
  }
</style>
