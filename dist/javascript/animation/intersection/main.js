import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/animation/names/attention-seekers/heart-beat.js';
import '@htmlplus/ui/intersection.js';

import './style.css';

$intersection.addEventListener('plus-change', (event) => {
  $animation.run = event.detail.isIntersecting;
});
