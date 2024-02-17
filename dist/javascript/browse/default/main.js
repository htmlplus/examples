import '@htmlplus/core/browse.js';
import '@htmlplus/core/center.js';

$browse.addEventListener('plus-change', (event) => {
  console.log(event.detail);
});
