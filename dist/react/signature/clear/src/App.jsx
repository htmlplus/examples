import { useRef } from 'react';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';

function App() {
  const signatureRef = useRef();
  function onClick() {
    signatureRef.current.value = '';
  }
  return (
    <>
      <plus-center>
        <plus-signature ref={signatureRef}></plus-signature>
      </plus-center>
      <br />
      <plus-center>
        <button onClick={onClick}>Clear</button>
      </plus-center>
    </>
  );
}
export default App;
