import { useRef, useState } from 'react';

import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/progress-bar.js';

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
    <plus-accordion summary="Summary" onplus-expand={onPlusExpand} ref={accordionRef}>
      <plus-progress-bar variant="indeterminate" slot="top" hidden={hidden}></plus-progress-bar>
      <plus-faker></plus-faker>
    </plus-accordion>
  );
}
export default App;
