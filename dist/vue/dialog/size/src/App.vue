<template>
  <div>
    <plus-stack gap="1rem">
      <button @click="show('sm')">Small</button>
      <button @click="show('md')">Medium</button>
      <button @click="show('lg')">Large</button>
      <button @click="show('xl')">Extra Large</button>
    </plus-stack>
    <plus-dialog animation connector="dialog-size" ref="dialogRef">
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
  import { ref } from 'vue';

  import '@htmlplus/ui/dialog-body.js';
  import '@htmlplus/ui/dialog-content.js';
  import '@htmlplus/ui/dialog-footer.js';
  import '@htmlplus/ui/dialog-header.js';
  import '@htmlplus/ui/dialog-toggler.js';
  import '@htmlplus/ui/dialog.js';
  import '@htmlplus/ui/faker.js';
  import '@htmlplus/ui/stack.js';

  const dialogRef = ref();
  const show = (size) => {
    dialogRef.value.size = size;
    dialogRef.value.open = true;
  };
</script>
