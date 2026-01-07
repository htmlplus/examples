import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

$browse.addEventListener('plus-change', (event) => {
  const { errors, file } = event.detail.files[0];
  if (errors.length) {
    alert(errors[0].message);
  } else {
    alert(`File '${file.name}' selected.`);
  }
});
