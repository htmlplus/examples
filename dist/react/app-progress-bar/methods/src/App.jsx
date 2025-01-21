import { useRef } from 'react';

import '@htmlplus/ui/app-progress-bar.js';
import '@htmlplus/ui/stack.js';

function App() {
  const appProgressBarRef = useRef();
  function onClick1() {
    appProgressBarRef.current?.start();
  }
  function onClick2() {
    appProgressBarRef.current?.set(0.4);
  }
  function onClick3() {
    appProgressBarRef.current?.increase();
  }
  function onClick4() {
    appProgressBarRef.current?.trickle();
  }
  function onClick5() {
    appProgressBarRef.current?.done();
  }
  function onClick6() {
    appProgressBarRef.current?.done(true);
  }
  return (
    <>
      <plus-app-progress-bar ref={appProgressBarRef}></plus-app-progress-bar>
      <br />
      <plus-stack gap="0.5rem">
        <button onClick={onClick1}>Start</button>
        <button onClick={onClick2}>Set</button>
        <button onClick={onClick3}>Increase</button>
        <button onClick={onClick4}>Trickle</button>
        <button onClick={onClick5}>Done</button>
        <button onClick={onClick6}>Force Done</button>
      </plus-stack>
    </>
  );
}
export default App;
