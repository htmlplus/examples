import { useRef } from 'react';

import '@htmlplus/core/animation.js';
import '@htmlplus/core/center.js';

function App() {
  const animationRef = useRef();
  function onClick1() {
    animationRef.current.cancel();
  }
  function onClick2() {
    animationRef.current.finish();
  }
  function onClick3() {
    animationRef.current.pause();
  }
  function onClick4() {
    animationRef.current.play();
  }
  return (
    <>
      <plus-center>
        <plus-animation iterations={3} name="fade-out" ref={animationRef}></plus-animation>
      </plus-center>
      <br />
      <plus-center>
        <button onclick={onClick1}>Cancel</button>
        <button onclick={onClick2}>Finish</button>
        <button onclick={onClick3}>Pause</button>
        <button onclick={onClick4}>Play</button>
      </plus-center>
    </>
  );
}
export default App;
