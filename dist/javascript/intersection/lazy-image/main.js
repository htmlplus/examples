import '@htmlplus/core/card.js';
import '@htmlplus/core/intersection.js';
import '@htmlplus/core/spinner.js';

import './style.css';

$intersection.addEventListener('plus-change', (event) => {
  if (!event.detail.isIntersecting) return;
  setTimeout(() => {
    const image = event.target.querySelector('img');
    const spinner = event.target.querySelector('plus-spinner');
    const src = image.getAttribute('data-src');
    image.setAttribute('src', src);
    image.hidden = false;
    spinner.hidden = true;
  }, 1000);
});
