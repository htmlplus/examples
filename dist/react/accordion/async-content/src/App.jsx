import { useRef, useState } from 'react';

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/progress-bar.js';

function App() {
  const accordionRef = useRef();
  const [hidden, setHidden] = useState(true);
  function onPlusExpand(event) {
    event.preventDefault();
    setHidden(false);
    setTimeout(() => {
      setHidden(true);
      accordionRef.current.open = true;
    }, 2500);
  }
  return (
    <plus-accordion summary="Summary" onPlusExpand={onPlusExpand} ref={accordionRef}>
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
