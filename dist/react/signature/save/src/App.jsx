import { useRef } from 'react';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';
import '@htmlplus/ui/stack.js';

function App() {
  const signatureRef = useRef();
  function onClick1() {
    console.log(signatureRef.current.toDataURL());
  }
  function onClick2() {
    console.log(signatureRef.current.toSVG());
  }
  function onClick3() {
    console.log(signatureRef.current.value);
  }
  return (
    <>
      <plus-center>
        <plus-signature ref={signatureRef}></plus-signature>
      </plus-center>
      <br />
      <plus-stack gap="0.5rem">
        <button type="button" onClick={onClick1}>
          To Data URL
        </button>
        <button type="button" onClick={onClick2}>
          To SVG
        </button>
        <button type="button" onClick={onClick3}>
          Get Value
        </button>
      </plus-stack>
    </>
  );
}
export default App;
