import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';

$signature.addEventListener('plus-after', (event) => {
  console.log('after', event.detail);
});
$signature.addEventListener('plus-before', (event) => {
  console.log('before', event.detail);
});
$signature.addEventListener('plus-change', (event) => {
  console.log('change', event.detail);
});
$signature.addEventListener('plus-end', (event) => {
  console.log('end', event.detail);
});
$signature.addEventListener('plus-ready', () => {
  console.log('ready');
});
$signature.addEventListener('plus-start', (event) => {
  console.log('start', event.detail);
});
