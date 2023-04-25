import '@htmlplus/core/center.js';
import '@htmlplus/core/switch.js';
const SwitchEvent = () => {
  const onChange = (event) => {
    window.alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  };
  return (
    <plus-center>
      <plus-switch onplus-change={(event) => onChange(event)}></plus-switch>
    </plus-center>
  );
};
export default SwitchEvent;
