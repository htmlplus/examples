import { useRef } from 'react';

import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';
import '@htmlplus/core/stack.js';

function App() {
  const signatureRef = useRef();
  const save = (background) => {
    const image = new Image();
    image.src = signatureRef.current.toDataURL('image/svg+xml', background);
    const tab = open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  };
  return (
    <>
      <plus-center>
        <plus-signature background-color="lightgray" ref={signatureRef}></plus-signature>
      </plus-center>
      <br />
      <plus-stack gap="1rem">
        <button onClick={() => save(true)}>Save With Background</button>
        <button onClick={() => save(false)}>Save Without Background</button>
      </plus-stack>
    </>
  );
}
export default App;
