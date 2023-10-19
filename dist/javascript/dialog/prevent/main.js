import '@htmlplus/core/center.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-footer.js';
import '@htmlplus/core/dialog-header.js';
import '@htmlplus/core/dialog-toggler.js';
import '@htmlplus/core/dialog.js';
import '@htmlplus/core/faker.js';

$dialog.addEventListener('plus-open', (event) => {
  if (confirm('Are you sure you want to open it?')) return;
  event.preventDefault();
});
$dialog.addEventListener('plus-close', (event) => {
  if (confirm('Are you sure you want to close it?')) return;
  event.preventDefault();
});
