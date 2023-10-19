import { useRef } from 'react';

import { Center, Signature } from '@htmlplus/react';

function App() {
  const signatureRef = useRef();
  function onClick() {
    signatureRef.current.clear();
  }
  return (
    <>
      <Center>
        <Signature backgroundColor="lightgray" ref={signatureRef}></Signature>
      </Center>
      <br />
      <Center>
        <button onClick={onClick}>Clear</button>
      </Center>
    </>
  );
}
export default App;
