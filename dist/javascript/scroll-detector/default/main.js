import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/scroll-detector.js';

import './style.css';

$detector.addEventListener('plus-change', (event) => {
  console.log(event.detail);
});
