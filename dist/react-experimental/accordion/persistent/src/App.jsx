import { useEffect, useRef } from 'react';

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';

function App() {
  const accordionsRef = useRef();
  useEffect(() => {
    Array.from(accordionsRef.current.children).forEach((accordion, index, accordions) => {
      accordion.addEventListener('plus-expand', (event) => {
        accordions.forEach((accordion) => {
          accordion.open = event.target == accordion;
        });
      });
    });
  }, []);
  return (
    <div ref={accordionsRef}>
      <plus-accordion summary="First">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Second">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Third">
        <plus-faker></plus-faker>
      </plus-accordion>
    </div>
  );
}
export default App;
