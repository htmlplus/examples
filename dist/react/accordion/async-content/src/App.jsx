import { useEffect, useRef, useState } from 'react';

import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/progress-bar.js';

function App() {
  const accordionRef = useRef();
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    if (!accordionRef.current) return;
    function onPlusExpand(event) {
      event.preventDefault();
      setHidden(false);
      setTimeout(() => {
        setHidden(true);
        accordionRef.current.open = true;
      }, 2500);
    }
    accordionRef.current.addEventListener('plus-expand', onPlusExpand);
    return () => {
      if (!accordionRef.current) return;
      accordionRef.current.removeEventListener('plus-expand', onPlusExpand);
    };
  });
  return (
    <plus-accordion summary="Summary" ref={accordionRef}>
      <plus-progress-bar
        variant="indeterminate"
        slot="top"
        style={{
          height: '2px'
        }}
        hidden={hidden}
      ></plus-progress-bar>
      <plus-faker></plus-faker>
    </plus-accordion>
  );
}
export default App;
