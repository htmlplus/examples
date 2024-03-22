import { useEffect, useRef } from 'react';

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';

function App() {
  const accordionRef = useRef();
  useEffect(() => {
    if (!accordionRef.current) return;
    function onPlusCollapse(event) {
      if (confirm('Are you sure you want to collapse it?')) return;
      event.preventDefault();
    }
    accordionRef.current.addEventListener('plus-collapse', onPlusCollapse);
    return () => {
      if (!accordionRef.current) return;
      accordionRef.current.removeEventListener('plus-collapse', onPlusCollapse);
    };
  });
  useEffect(() => {
    if (!accordionRef.current) return;
    function onPlusExpand(event) {
      if (confirm('Are you sure you want to expand it?')) return;
      event.preventDefault();
    }
    accordionRef.current.addEventListener('plus-expand', onPlusExpand);
    return () => {
      if (!accordionRef.current) return;
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
