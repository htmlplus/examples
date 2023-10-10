import '@htmlplus/core/center.js';
import '@htmlplus/core/switch.js';

function App() {
  function onPlusChange(event) {
    alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  }
  return (
    <plus-center>
      <plus-switch onplus-change={onPlusChange}></plus-switch>
    </plus-center>
  );
}
export default App;
