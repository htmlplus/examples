import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/stack.js';

$collapse.addEventListener('click', () => {
  $accordion.collapse();
});
$expand.addEventListener('click', () => {
  $accordion.expand();
});
$toggle.addEventListener('click', () => {
  $accordion.toggle();
});
