import '@htmlplus/ui/card-body.js';
import '@htmlplus/ui/card.js';
import '@htmlplus/ui/center.js';
import '@htmlplus/ui/click-outside.js';

import './style.css';

$button.addEventListener('click', () => {
  $menu.hidden = !$menu.hidden;
});
$clickOutside.addEventListener('plus-click-outside', () => {
  $menu.hidden = true;
});
