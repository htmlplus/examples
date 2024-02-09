import { useEffect, useRef } from 'react';

import '@htmlplus/core/browse.js';

function App() {
  const browseRef = useRef();
  useEffect(() => {
    if (!browseRef.current) return;
    function onPlusChange(event) {
      const name = event.detail.files[0].file.name;
      alert(`File '${name}' selected.`);
    }
    browseRef.current.addEventListener('plus-change', onPlusChange);
    return () => {
      if (!browseRef.current) return;
      browseRef.current.removeEventListener('plus-change', onPlusChange);
    };
  });
  return (
    <plus-browse droppable ref={browseRef}>
      {' '}
      Click or Drag & Drop a file(s) here{' '}
    </plus-browse>
  );
}
export default App;
