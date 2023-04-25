import { useState } from 'react';
import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';
import '@htmlplus/core/stack.js';
const SignatureHistory = () => {
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const sync = () => {
    setCanUndo(window.signature2.canUndo());
    setCanRedo(window.signature2.canRedo());
  };
  const onUndo = () => {
    window.signature2.undo();
    sync();
  };
  const onRedo = () => {
    window.signature2.redo();
    sync();
  };
  const onPlusEnd = () => {
    sync();
  };
  return (
    <>
      <plus-center>
        <plus-signature
          id="signature2"
          background-color="lightgray"
          onplus-end={() => onPlusEnd()}
        ></plus-signature>
      </plus-center>
      <br />
      <plus-stack gap="1rem">
        <button disabled={!canUndo} onClick={() => onUndo()}>
          Undo
        </button>
        <button disabled={!canRedo} onClick={() => onRedo()}>
          Redo
        </button>
      </plus-stack>
    </>
  );
};
export default SignatureHistory;
