import '@htmlplus/core/card-body.js';
import '@htmlplus/core/card.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/intersection.js';
import '@htmlplus/core/sticky.js';

import './style.css';

$intersection.addEventListener('plus-change', (event) => {
  $status.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';
});
