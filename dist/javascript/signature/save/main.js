import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';
import '@htmlplus/ui/stack.js';

$toDataURL.addEventListener('click', () => {
  console.log($signature.toDataURL());
});
$toSVG.addEventListener('click', () => {
  console.log($signature.toSVG());
});
$getValue.addEventListener('click', () => {
  console.log($signature.value);
});
