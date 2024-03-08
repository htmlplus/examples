import { useEffect, useRef, useState } from 'react';

import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';
import '@htmlplus/core/stack.js';

function App() {
  const signatureRef = useRef();
  const [disabled2, setDisabled2] = useState(true);
  const [disabled1, setDisabled1] = useState(true);
  const sync = () => {
    setDisabled1(!signatureRef.current.undoable);
    setDisabled2(!signatureRef.current.redoable);
  };
  function onClick1() {
    signatureRef.current.undo();
    sync();
  }
  function onClick2() {
    signatureRef.current.redo();
    sync();
  }
  useEffect(() => {
    if (!signatureRef.current) return;
    function onPlusEnd() {
      sync();
    }
    signatureRef.current.addEventListener('plus-end', onPlusEnd);
    return () => {
      if (!signatureRef.current) return;
      signatureRef.current.removeEventListener('plus-end', onPlusEnd);
    };
  });
  return (
    <>
      <plus-center>
        <plus-signature background-color="lightgray" ref={signatureRef}></plus-signature>
      </plus-center>
      <br />
      <plus-stack gap="1rem">
        <button disabled={disabled1} onClick={onClick1}>
          Undo
        </button>
        <button disabled={disabled2} onClick={onClick2}>
          Redo
        </button>
      </plus-stack>
    </>
  );
}
export default App;
