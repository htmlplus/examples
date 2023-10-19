import '@htmlplus/core/animation.js';
import '@htmlplus/core/animation/names/attention-seekers/heart-beat.js';
import '@htmlplus/core/intersection.js';

import './style.css';

$intersection.addEventListener('plus-change', (event) => {
  $animation.run = event.detail.isIntersecting;
});
