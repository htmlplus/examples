import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/progress-bar.js';
import '@htmlplus/ui/scroll-detector.js';

import './style.css';

$detector.addEventListener('plus-change', (event) => {
  $progressbar.value = event.detail.progress;
});
