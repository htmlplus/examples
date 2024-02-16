import { useEffect, useRef } from 'react';

import '@htmlplus/core/faker.js';
import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/sticky.js';

function App() {
  const plusFakerRef = useRef();
  useEffect(() => {
    plusFakerRef.current.arguments = [10, '\n\n'];
  }, []);
  return (
    <div className="container">
      <header>Header</header>
      <plus-grid>
        <plus-grid-item xs="7">
          <plus-faker api="lorem.paragraphs" ref={plusFakerRef}></plus-faker>
        </plus-grid-item>
        <plus-grid-item xs="5">
          <br />
          <plus-sticky>
            <aside>A Sticky Sidebar</aside>
          </plus-sticky>
        </plus-grid-item>
      </plus-grid>
    </div>
  );
}
export default App;