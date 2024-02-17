import { useEffect, useRef } from 'react';

import '@htmlplus/core/browse.js';
import '@htmlplus/core/center.js';

function App() {
  const browseRef = useRef();
  useEffect(() => {
    if (!browseRef.current) return;
    function onPlusChange(event) {
      if (event.detail.error) {
        alert(event.detail.error.message);
      }
    }
    browseRef.current.addEventListener('plus-change', onPlusChange);
    return () => {
      if (!browseRef.current) return;
      browseRef.current.removeEventListener('plus-change', onPlusChange);
    };
  });
  return (
    <plus-center>
      <plus-browse min={3} max={5} multiple ref={browseRef}>
        {' '}
        Click Here{' '}
      </plus-browse>
    </plus-center>
  );
}
export default App;
