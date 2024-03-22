import { useRef } from 'react';

import '@htmlplus/ui/counter.js';
import '@htmlplus/ui/intersection.js';

function App() {
  const counterRef = useRef();
  function onPlusChange(event) {
    counterRef.current.play = event.detail.isIntersecting;
  }
  return (
    <div className="container">
      <plus-intersection onplus-change={onPlusChange}>
        <plus-counter to={1000} ref={counterRef}></plus-counter>
      </plus-intersection>
    </div>
  );
}
export default App;
