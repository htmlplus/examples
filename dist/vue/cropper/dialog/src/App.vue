<template>
  <div>
    <plus-center>
      <plus-dialog-toggler connector="dialog-cropper"> Open </plus-dialog-toggler>
    </plus-center>
    <plus-dialog
      animation="fade"
      connector="dialog-cropper"
      @plus-opened="onPlusOpened"
      @plus-closed="onPlusClosed"
    >
      <plus-dialog-content>
        <plus-dialog-header> Cropper </plus-dialog-header>
        <plus-dialog-body>
          <plus-cropper
            src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
            :disabled="disabled"
          ></plus-cropper>
        </plus-dialog-body>
        <plus-dialog-footer>
          <plus-dialog-toggler> Close </plus-dialog-toggler>
        </plus-dialog-footer>
      </plus-dialog-content>
    </plus-dialog>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import '@htmlplus/core/center.js';
  import '@htmlplus/core/cropper.js';
  import '@htmlplus/core/dialog-body.js';
  import '@htmlplus/core/dialog-content.js';
  import '@htmlplus/core/dialog-footer.js';
  import '@htmlplus/core/dialog-header.js';
  import '@htmlplus/core/dialog-toggler.js';
  import '@htmlplus/core/dialog.js';

  const disabled = ref(true);
  function onPlusOpened() {
    disabled.value = false;
  }
  function onPlusClosed() {
    disabled.value = true;
  }
</script>
