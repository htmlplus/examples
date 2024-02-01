import { useRef } from 'react';

import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';

function App() {
  const signatureRef = useRef();
  function onClick() {
    signatureRef.current.clear();
  }
  return (
    <>
      <plus-center>
        <plus-signature background-color="lightgray" ref={signatureRef}></plus-signature>
      </plus-center>
      <br />
      <plus-center>
        <button onClick={onClick}>Clear</button>
      </plus-center>
    </>
  );
}
export default App;
