import '@htmlplus/ui/dialog-body.js';
import '@htmlplus/ui/dialog-content.js';
import '@htmlplus/ui/dialog-footer.js';
import '@htmlplus/ui/dialog-header.js';
import '@htmlplus/ui/dialog-toggler.js';
import '@htmlplus/ui/dialog.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/stack.js';

const show = (size) => {
  $dialog.size = size;
  $dialog.open = true;
};
$button1.addEventListener('click', () => show('sm'));
$button2.addEventListener('click', () => show('md'));
$button3.addEventListener('click', () => show('lg'));
$button4.addEventListener('click', () => show('xl'));
