import '@htmlplus/core/card-body.js';
import '@htmlplus/core/card.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/click-outside.js';

import './style.css';

$button.addEventListener('click', () => {
  $menu.hidden = !$menu.hidden;
});
$clickOutside.addEventListener('plus-click-outside', () => {
  $menu.hidden = true;
});
