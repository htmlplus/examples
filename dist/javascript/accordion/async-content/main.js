import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/progress-bar.js';

import './style.css';

$accordion.addEventListener('plus-expand', (event) => {
  event.preventDefault();
  $progress.hidden = false;
  setTimeout(() => {
    $progress.hidden = true;
    $accordion.open = true;
  }, 2500);
});
