import '@htmlplus/ui/card-body.js';
import '@htmlplus/ui/card.js';
import '@htmlplus/ui/center.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/intersection.js';
import '@htmlplus/ui/sticky.js';

import './style.css';

$intersection.addEventListener('plus-change', (event) => {
  $status.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';
});
