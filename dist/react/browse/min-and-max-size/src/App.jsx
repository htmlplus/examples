import { useEffect, useRef } from 'react';

import '@htmlplus/core/browse.js';
import '@htmlplus/core/center.js';

function App() {
  const browseRef = useRef();
  useEffect(() => {
    if (!browseRef.current) return;
    function onPlusChange(event) {
      if (event.detail.files?.[0]?.errors.length) {
        alert(event.detail.files[0].errors[0].message);
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
      <plus-browse min-size={1000000} max-size={5000000} ref={browseRef}>
        {' '}
        Click Here{' '}
      </plus-browse>
    </plus-center>
  );
}
export default App;
