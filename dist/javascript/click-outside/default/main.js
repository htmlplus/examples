import '@htmlplus/core/card-body.js';
import '@htmlplus/core/card.js';
import '@htmlplus/core/click-outside.js';

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
