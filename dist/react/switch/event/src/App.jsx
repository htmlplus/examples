import { useEffect, useRef } from 'react';

import '@htmlplus/core/center.js';
import '@htmlplus/core/switch.js';

function App() {
  const switchRef = useRef();
  useEffect(() => {
    if (!switchRef.current) return;
    function onPlusChange(event) {
      alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
    }
    switchRef.current.addEventListener('plus-change', onPlusChange);
    return () => {
      if (!switchRef.current) return;
      switchRef.current.removeEventListener('plus-change', onPlusChange);
    };
  });
  return (
    <plus-center>
      <plus-switch ref={switchRef}></plus-switch>
    </plus-center>
  );
}
export default App;
