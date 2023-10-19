import '@htmlplus/core/faker.js';
import '@htmlplus/core/scroll-detector.js';

import './style.css';

$detector.addEventListener('plus-change', (event) => {
  console.log(event.detail);
});
