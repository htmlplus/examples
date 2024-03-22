<script>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/cropper.js';
  import '@htmlplus/ui/dialog-body.js';
  import '@htmlplus/ui/dialog-content.js';
  import '@htmlplus/ui/dialog-footer.js';
  import '@htmlplus/ui/dialog-header.js';
  import '@htmlplus/ui/dialog-toggler.js';
  import '@htmlplus/ui/dialog.js';

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
