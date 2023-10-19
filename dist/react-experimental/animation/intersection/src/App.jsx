import { useRef } from 'react';

import '@htmlplus/core/animation.js';
import '@htmlplus/core/animation/names/attention-seekers/heart-beat.js';
import '@htmlplus/core/intersection.js';

function App() {
  const animationRef = useRef();
  function onPlusChange(event) {
    animationRef.current.run = event.detail.isIntersecting;
  }
  return (
    <div className="container">
      <plus-intersection onplus-change={onPlusChange}>
        <plus-animation name="heart-beat" ref={animationRef}></plus-animation>
      </plus-intersection>
    </div>
  );
}
export default App;
