import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/progress-bar.js';

$accordion.addEventListener('plus-expand', (event) => {
  event.preventDefault();
  $progress.hidden = false;
  setTimeout(() => {
    $progress.hidden = true;
    $accordion.open = true;
  }, 2500);
});
