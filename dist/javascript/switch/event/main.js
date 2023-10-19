import '@htmlplus/core/center.js';
import '@htmlplus/core/switch.js';

$switch.addEventListener('plus-change', (event) => {
  alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
});
