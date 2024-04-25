<template>
  <div>
    <plus-center>
      <plus-dialog-toggler connector="dialog-backdrop">Open</plus-dialog-toggler>
    </plus-center>
    <plus-dialog animation connector="dialog-backdrop" transparent>
      <plus-dialog-content>
        <plus-dialog-header>Dialog Title</plus-dialog-header>
        <plus-dialog-body>
          <plus-faker></plus-faker>
        </plus-dialog-body>
        <plus-dialog-footer>
          <plus-dialog-toggler>Close</plus-dialog-toggler>
        </plus-dialog-footer>
      </plus-dialog-content>
    </plus-dialog>
  </div>
</template>

<script setup>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/dialog-body.js';
  import '@htmlplus/ui/dialog-content.js';
  import '@htmlplus/ui/dialog-footer.js';
  import '@htmlplus/ui/dialog-header.js';
  import '@htmlplus/ui/dialog-toggler.js';
  import '@htmlplus/ui/dialog.js';
  import '@htmlplus/ui/faker.js';
</script>
