import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

$browse.addEventListener('plus-change', (event) => {
  if (event.detail.error) {
    alert(event.detail.error.message);
  } else {
    alert(`${event.detail.files.length} file(s) are selected.`);
  }
});
