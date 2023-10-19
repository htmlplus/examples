import '@htmlplus/core/center.js';
import '@htmlplus/core/cropper.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-footer.js';
import '@htmlplus/core/dialog-header.js';
import '@htmlplus/core/dialog-toggler.js';
import '@htmlplus/core/dialog.js';

$dialog.addEventListener('plus-opened', () => {
  $cropper.disabled = false;
});
$dialog.addEventListener('plus-closed', () => {
  $cropper.disabled = true;
});
