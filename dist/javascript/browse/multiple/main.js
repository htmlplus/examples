import '@htmlplus/core/browse.js';
import '@htmlplus/core/center.js';

$browse.addEventListener('plus-change', (event) => {
  alert(`${event.detail.files.length} file(s) are selected.`);
});
