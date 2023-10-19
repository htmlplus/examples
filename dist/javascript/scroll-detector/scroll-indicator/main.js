import '@htmlplus/core/faker.js';
import '@htmlplus/core/progress-bar.js';
import '@htmlplus/core/scroll-detector.js';

import './style.css';

$detector.addEventListener('plus-change', (event) => {
  $progressbar.value = event.detail.progress;
});
