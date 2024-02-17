import '@htmlplus/core/browse.js';
import '@htmlplus/core/center.js';

$browse.addEventListener('plus-change', (event) => {
  if (event.detail.error) {
    alert(event.detail.error.message);
  }
});
