import { useRef } from 'react';

import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/animation/names/attention-seekers/tada.js';
import '@htmlplus/ui/center.js';

function App() {
  const animationRef = useRef();
  function onClick() {
    animationRef.current.run = true;
  }
  return (
    <plus-center>
      <plus-animation name="tada" ref={animationRef}>
        <button onClick={onClick}>Click Me</button>
      </plus-animation>
    </plus-center>
  );
}
export default App;
