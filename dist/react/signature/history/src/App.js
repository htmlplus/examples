import { useState } from 'react';
import { Center, Signature } from '@htmlplus/react';
const SignatureHistory = () => {
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const sync = () => {
    setCanUndo(window.signature2.canUndo);
    setCanRedo(window.signature2.canRedo);
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
      <Center>
        <Signature
          id="signature2"
          backgroundColor="lightgray"
          onEnd={() => onPlusEnd()}
        ></Signature>
      </Center>
      <br />
      <Center>
        <button disabled={!canUndo} onClick={() => onUndo()}>
          Undo
        </button>
        &nbsp; &nbsp;
        <button disabled={!canRedo} onClick={() => onRedo()}>
          Redo
        </button>
      </Center>
    </>
  );
};
export default SignatureHistory;
