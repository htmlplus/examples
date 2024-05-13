import { useRef } from 'react';

import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/animation/names/attention-seekers/heart-beat.js';
import '@htmlplus/ui/intersection.js';

function App() {
  const animationRef = useRef();
  function onPlusChange(event) {
    animationRef.current.run = event.detail.isIntersecting;
  }
  return (
    <div className="container">
      <plus-intersection onPlusChange={onPlusChange}>
        <plus-animation name="heart-beat" ref={animationRef}></plus-animation>
      </plus-intersection>
    </div>
  );
}
export default App;
