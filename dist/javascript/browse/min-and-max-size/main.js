import '@htmlplus/core/browse.js';
import '@htmlplus/core/center.js';

$browse.addEventListener('plus-change', (event) => {
  if (event.detail.files?.[0]?.errors.length) {
    alert(event.detail.files[0].errors[0].message);
  }
});
