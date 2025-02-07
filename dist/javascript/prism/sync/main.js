import '@htmlplus/ui/center.js';
import '@htmlplus/ui/prism.js';
import '@htmlplus/ui/stack.js';

$change.addEventListener('click', () => {
  $prism1.innerHTML = `const now = ${Date.now()};`;
  $prism2.innerHTML = `const now = ${Date.now()};`;
});
