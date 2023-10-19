<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/cropper.js';
  import '@htmlplus/core/dialog-body.js';
  import '@htmlplus/core/dialog-content.js';
  import '@htmlplus/core/dialog-footer.js';
  import '@htmlplus/core/dialog-header.js';
  import '@htmlplus/core/dialog-toggler.js';
  import '@htmlplus/core/dialog.js';

  let disabled = true;
  function onPlusOpened() {
    disabled = false;
  }
  function onPlusClosed() {
    disabled = true;
  }
</script>

<plus-center>
  <plus-dialog-toggler connector="dialog-cropper"> Open </plus-dialog-toggler>
</plus-center>
<plus-dialog
  animation="fade"
  connector="dialog-cropper"
  on:plus-opened={onPlusOpened}
  on:plus-closed={onPlusClosed}
>
  <plus-dialog-content>
    <plus-dialog-header> Cropper </plus-dialog-header>
    <plus-dialog-body>
      <plus-cropper {disabled} src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
    </plus-dialog-body>
    <plus-dialog-footer>
      <plus-dialog-toggler> Close </plus-dialog-toggler>
    </plus-dialog-footer>
  </plus-dialog-content>
</plus-dialog>
