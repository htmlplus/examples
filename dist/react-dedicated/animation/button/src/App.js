import { useRef } from 'react';

import { Animation, Center } from '@htmlplus/react';

import '@htmlplus/core/animation/names/attention-seekers/tada.js';

function App() {
  const animationRef = useRef();
  function onClick() {
    animationRef.current.run = true;
  }
  return (
    <Center>
      <Animation name="tada" ref={animationRef}>
        <button onClick={onClick}>Click Me</button>
      </Animation>
    </Center>
  );
}
export default App;
