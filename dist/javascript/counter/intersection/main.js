import '@htmlplus/ui/counter.js';
import '@htmlplus/ui/intersection.js';

import './style.css';

$intersection.addEventListener('plus-change', (event) => {
  $counter.play = event.detail.isIntersecting;
});
