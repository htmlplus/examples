import '@htmlplus/ui/app-progress-bar.js';

import './style.css';

requestAnimationFrame(() => {
  $appProgressBar?.start();
});
setTimeout(() => {
  $appProgressBar?.done();
}, 5000);
