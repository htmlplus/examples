import { useRef } from 'react';

import { Animation, Center } from '@htmlplus/react';

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
      <Center>
        <Animation iterations={3} name="fade-out" ref={animationRef}></Animation>
      </Center>
      <br />
      <Center>
        <button onClick={onClick1}>Cancel</button>
        <button onClick={onClick2}>Finish</button>
        <button onClick={onClick3}>Pause</button>
        <button onClick={onClick4}>Play</button>
      </Center>
    </>
  );
}
export default App;
