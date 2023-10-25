import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/stack.js';

$collapse.addEventListener('click', () => {
  $accordion.collapse();
});
$expand.addEventListener('click', () => {
  $accordion.expand();
});
$toggle.addEventListener('click', () => {
  $accordion.toggle();
});
