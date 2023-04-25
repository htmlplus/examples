<template>
  <plus-center>
    <plus-dialog-toggler connector="dialog-persistent">
      Open
    </plus-dialog-toggler>
  </plus-center>
  <plus-dialog animation="fade" connector="dialog-persistent" persistent>
    <plus-dialog-content>
      <plus-dialog-header> Dialog Title </plus-dialog-header>
      <plus-dialog-body>
        <plus-faker></plus-faker>
      </plus-dialog-body>
      <plus-dialog-footer>
        <plus-dialog-toggler> Close </plus-dialog-toggler>
      </plus-dialog-footer>
    </plus-dialog-content>
  </plus-dialog>
</template>

<script setup>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/dialog.js';
  import '@htmlplus/core/dialog-body.js';
  import '@htmlplus/core/dialog-content.js';
  import '@htmlplus/core/dialog-footer.js';
  import '@htmlplus/core/dialog-header.js';
  import '@htmlplus/core/dialog-toggler.js';
  import '@htmlplus/core/faker.js';
</script>
