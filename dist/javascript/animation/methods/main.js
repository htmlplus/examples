import '@htmlplus/core/animation.js';
import '@htmlplus/core/center.js';

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
