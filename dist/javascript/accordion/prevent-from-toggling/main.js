import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';

$accordion.addEventListener('plus-collapse', (event) => {
  if (confirm('Are you sure you want to collapse it?')) return;
  event.preventDefault();
});
$accordion.addEventListener('plus-expand', (event) => {
  if (confirm('Are you sure you want to expand it?')) return;
  event.preventDefault();
});
