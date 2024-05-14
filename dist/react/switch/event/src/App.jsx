import '@htmlplus/ui/center.js';
import '@htmlplus/ui/switch.js';

function App() {
  function onPlusChange(event) {
    alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  }
  return (
    <plus-center>
      <plus-switch onPlusChange={onPlusChange}></plus-switch>
    </plus-center>
  );
}
export default App;
