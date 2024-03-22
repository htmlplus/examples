import '@htmlplus/ui/center.js';
import '@htmlplus/ui/dialog-body.js';
import '@htmlplus/ui/dialog-content.js';
import '@htmlplus/ui/dialog-footer.js';
import '@htmlplus/ui/dialog-header.js';
import '@htmlplus/ui/dialog-toggler.js';
import '@htmlplus/ui/dialog.js';
import '@htmlplus/ui/faker.js';

$dialog.addEventListener('plus-open', (event) => {
  if (confirm('Are you sure you want to open it?')) return;
  event.preventDefault();
});
$dialog.addEventListener('plus-close', (event) => {
  if (confirm('Are you sure you want to close it?')) return;
  event.preventDefault();
});
