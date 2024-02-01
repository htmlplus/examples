import { useEffect, useRef } from 'react';

import '@htmlplus/core/counter.js';
import '@htmlplus/core/intersection.js';

function App() {
  const intersectionRef = useRef();
  const counterRef = useRef();
  useEffect(() => {
    function onPlusChange(event) {
      counterRef.current.play = event.detail.isIntersecting;
    }
    intersectionRef.current.addEventListener('plus-change', onPlusChange);
    return () => {
      intersectionRef.current.removeEventListener('plus-change', onPlusChange);
    };
  });
  return (
    <div className="container">
      <plus-intersection ref={intersectionRef}>
        <plus-counter to={1000} ref={counterRef}></plus-counter>
      </plus-intersection>
    </div>
  );
}
export default App;
