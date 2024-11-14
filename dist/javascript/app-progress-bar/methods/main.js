import '@htmlplus/ui/app-progress-bar.js';
import '@htmlplus/ui/stack.js';

import './style.css';

$start.addEventListener('click', () => {
  $appProgressBar.start();
});
$set.addEventListener('click', () => {
  $appProgressBar.set(0.4);
});
$increase.addEventListener('click', () => {
  $appProgressBar.increase();
});
$trickle.addEventListener('click', () => {
  $appProgressBar.trickle();
});
$done.addEventListener('click', () => {
  $appProgressBar.done();
});
$forceDone.addEventListener('click', () => {
  $appProgressBar.done(true);
});
