import '@htmlplus/core/card.js';

import './style.css';

$input.addEventListener('change', (event) => {
  $card.elevation = event.target.value;
});
