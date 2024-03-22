import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/center.js';

import './style.css';

$cancel.addEventListener('click', () => {
  $animation.cancel();
});
$finish.addEventListener('click', () => {
  $animation.finish();
});
$pause.addEventListener('click', () => {
  $animation.pause();
});
$play.addEventListener('click', () => {
  $animation.play();
});
