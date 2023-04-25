<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/dialog.js';
  import '@htmlplus/core/dialog-body.js';
  import '@htmlplus/core/dialog-content.js';
  import '@htmlplus/core/dialog-toggler.js';
  import '@htmlplus/core/faker.js';
</script>

<plus-center>
  <plus-dialog-toggler connector="dialog-full-width">
    Open
  </plus-dialog-toggler>
</plus-center>
<plus-dialog animation="fade" connector="dialog-full-width" full-width>
  <plus-dialog-content>
    <plus-dialog-body>
      <plus-faker></plus-faker>
    </plus-dialog-body>
  </plus-dialog-content>
</plus-dialog>
