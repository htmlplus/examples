import { useRef } from 'react';

import { Animation, Intersection } from '@htmlplus/react';

import '@htmlplus/core/animation/names/attention-seekers/heart-beat.js';

function App() {
  const animationRef = useRef();
  function onChange(event) {
    animationRef.current.run = event.detail.isIntersecting;
  }
  return (
    <div className="container">
      <Intersection onChange={onChange}>
        <Animation name="heart-beat" ref={animationRef}></Animation>
      </Intersection>
    </div>
  );
}
export default App;
