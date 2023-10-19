import { useRef, useState } from 'react';

import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';
import '@htmlplus/core/stack.js';

function App() {
  const signatureRef = useRef();
  const [disabled2, setDisabled2] = useState(true);
  const [disabled1, setDisabled1] = useState(true);
  const sync = () => {
    setDisabled1(!signatureRef.current.canUndo());
    setDisabled2(!signatureRef.current.canRedo());
  };
  function onClick1() {
    signatureRef.current.undo();
    sync();
  }
  function onClick2() {
    signatureRef.current.redo();
    sync();
  }
  function onPlusEnd() {
    sync();
  }
  return (
    <>
      <plus-center>
        <plus-signature
          background-color="lightgray"
          onplus-end={onPlusEnd}
          ref={signatureRef}
        ></plus-signature>
      </plus-center>
      <br />
      <plus-stack gap="1rem">
        <button disabled={disabled1} onclick={onClick1}>
          Undo
        </button>
        <button disabled={disabled2} onclick={onClick2}>
          Redo
        </button>
      </plus-stack>
    </>
  );
}
export default App;
