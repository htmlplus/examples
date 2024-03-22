import '@htmlplus/ui/browse.js';

import './style.css';

$browse.addEventListener('plus-change', (event) => {
  const name = event.detail.files[0].file.name;
  alert(`File '${name}' selected.`);
});
