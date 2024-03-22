import '@htmlplus/ui/card-body.js';
import '@htmlplus/ui/card.js';
import '@htmlplus/ui/click-outside.js';

let inside = 0;
let outside = 0;
$clickOutside.addEventListener('click', () => {
  const count = inside + 1;
  inside = count;
  $inside.innerHTML = `${count}`;
});
$clickOutside.addEventListener('plus-click-outside', () => {
  const count = outside + 1;
  outside = count;
  $outside.innerHTML = `${count}`;
});
