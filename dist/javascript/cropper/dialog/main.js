import '@htmlplus/ui/center.js';
import '@htmlplus/ui/cropper.js';
import '@htmlplus/ui/dialog-body.js';
import '@htmlplus/ui/dialog-content.js';
import '@htmlplus/ui/dialog-footer.js';
import '@htmlplus/ui/dialog-header.js';
import '@htmlplus/ui/dialog-toggler.js';
import '@htmlplus/ui/dialog.js';

$dialog.addEventListener('plus-opened', () => {
  $cropper.disabled = false;
});
$dialog.addEventListener('plus-closed', () => {
  $cropper.disabled = true;
});
