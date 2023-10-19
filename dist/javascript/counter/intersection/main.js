import '@htmlplus/core/counter.js';
import '@htmlplus/core/intersection.js';

import './style.css';

$intersection.addEventListener('plus-change', (event) => {
  $counter.play = event.detail.isIntersecting;
});
