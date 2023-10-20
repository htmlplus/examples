import { useRef } from 'react';

import '@htmlplus/core/card-body.js';
import '@htmlplus/core/card.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/intersection.js';
import '@htmlplus/core/sticky.js';

function App() {
  const statusRef = useRef();
  function onPlusChange(event) {
    statusRef.current.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';
  }
  return (
    <div className="container">
      <plus-sticky top="1rem" z-index={1}>
        <plus-center>
          <div className="status" ref={statusRef}></div>
        </plus-center>
      </plus-sticky>
      <plus-intersection onplus-change={onPlusChange}>
        <plus-card elevation={10}>
          <plus-card-body>
            <plus-faker></plus-faker>
          </plus-card-body>
        </plus-card>
      </plus-intersection>
    </div>
  );
}
export default App;