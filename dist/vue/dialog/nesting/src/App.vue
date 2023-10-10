<template>
  <div>
    <plus-stack gap="1rem">
      <plus-dialog-toggler connector="dialog-nesting-1"> Open Dialog 1 </plus-dialog-toggler>
      <plus-dialog-toggler connector="dialog-nesting-2"> Open Dialog 2 </plus-dialog-toggler>
      <plus-dialog-toggler connector="dialog-nesting-3"> Open Dialog 3 </plus-dialog-toggler>
    </plus-stack>
    <plus-dialog animation="fade" connector="dialog-nesting-1" size="xl">
      <plus-dialog-content>
        <plus-dialog-header> Dialog 1 </plus-dialog-header>
        <plus-dialog-body>
          <plus-faker></plus-faker>
        </plus-dialog-body>
        <plus-dialog-footer>
          <plus-dialog-toggler connector="dialog-nesting-2"> Open Dialog 2 </plus-dialog-toggler>
          <plus-dialog-toggler> Close </plus-dialog-toggler>
        </plus-dialog-footer>
      </plus-dialog-content>
    </plus-dialog>
    <plus-dialog animation="fade" connector="dialog-nesting-2" size="lg">
      <plus-dialog-content>
        <plus-dialog-header> Dialog 2 </plus-dialog-header>
        <plus-dialog-body>
          <plus-faker></plus-faker>
        </plus-dialog-body>
        <plus-dialog-footer>
          <plus-dialog-toggler connector="dialog-nesting-3"> Open Dialog 3 </plus-dialog-toggler>
          <plus-dialog-toggler> Close </plus-dialog-toggler>
        </plus-dialog-footer>
      </plus-dialog-content>
    </plus-dialog>
    <plus-dialog animation="fade" connector="dialog-nesting-3" size="sm">
      <plus-dialog-content>
        <plus-dialog-header> Dialog 3 </plus-dialog-header>
        <plus-dialog-body>
          <plus-faker></plus-faker>
        </plus-dialog-body>
        <plus-dialog-footer>
          <plus-dialog-toggler> Close </plus-dialog-toggler>
        </plus-dialog-footer>
      </plus-dialog-content>
    </plus-dialog>
  </div>
</template>

<script setup>
  import '@htmlplus/core/dialog-body.js';
  import '@htmlplus/core/dialog-content.js';
  import '@htmlplus/core/dialog-footer.js';
  import '@htmlplus/core/dialog-header.js';
  import '@htmlplus/core/dialog-toggler.js';
  import '@htmlplus/core/dialog.js';
  import '@htmlplus/core/faker.js';
  import '@htmlplus/core/stack.js';
</script>
