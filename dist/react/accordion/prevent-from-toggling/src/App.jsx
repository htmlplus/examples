import { useEffect, useRef } from 'react';

import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';

function App() {
  const accordionRef = useRef();
  useEffect(() => {
    function onPlusCollapse(event) {
      if (confirm('Are you sure you want to collapse it?')) return;
      event.preventDefault();
    }
    accordionRef.current.addEventListener('plus-collapse', onPlusCollapse);
    return () => {
      accordionRef.current.removeEventListener('plus-collapse', onPlusCollapse);
    };
  });
  useEffect(() => {
    function onPlusExpand(event) {
      if (confirm('Are you sure you want to expand it?')) return;
      event.preventDefault();
    }
    accordionRef.current.addEventListener('plus-expand', onPlusExpand);
    return () => {
      accordionRef.current.removeEventListener('plus-expand', onPlusExpand);
    };
  });
  return (
    <plus-accordion summary="Summary" ref={accordionRef}>
      <plus-faker></plus-faker>
    </plus-accordion>
  );
}
export default App;
