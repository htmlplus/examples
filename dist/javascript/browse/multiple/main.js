import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

$browse.addEventListener('plus-change', (event) => {
  alert(`${event.detail.files.length} file(s) are selected.`);
});
