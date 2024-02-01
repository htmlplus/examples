import { useEffect, useRef } from 'react';

import '@htmlplus/core/animation.js';
import '@htmlplus/core/animation/names/attention-seekers/heart-beat.js';
import '@htmlplus/core/intersection.js';

function App() {
  const intersectionRef = useRef();
  const animationRef = useRef();
  useEffect(() => {
    function onPlusChange(event) {
      animationRef.current.run = event.detail.isIntersecting;
    }
    intersectionRef.current.addEventListener('plus-change', onPlusChange);
    return () => {
      intersectionRef.current.removeEventListener('plus-change', onPlusChange);
    };
  });
  return (
    <div className="container">
      <plus-intersection ref={intersectionRef}>
        <plus-animation name="heart-beat" ref={animationRef}></plus-animation>
      </plus-intersection>
    </div>
  );
}
export default App;
