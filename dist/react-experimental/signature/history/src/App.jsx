import { useRef, useState } from 'react';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';
import '@htmlplus/ui/stack.js';

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
  function onPlusEnd() {
    sync();
  }
  return (
    <>
      <plus-center>
        <plus-signature
          background-color="lightgray"
          onPlusEnd={onPlusEnd}
          ref={signatureRef}
        ></plus-signature>
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
