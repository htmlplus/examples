import '@htmlplus/ui/center.js';
import '@htmlplus/ui/switch.js';

$switch.addEventListener('plus-change', (event) => {
  alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
});
