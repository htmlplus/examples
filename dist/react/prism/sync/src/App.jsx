import { useRef } from 'react';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/prism.js';
import '@htmlplus/ui/stack.js';

function App() {
  const prism2Ref = useRef();
  const prism1Ref = useRef();
  function onClick() {
    prism1Ref.current.innerHTML = `const now = ${Date.now()};`;
    prism2Ref.current.innerHTML = `const now = ${Date.now()};`;
  }
  return (
    <plus-stack gap="0.5rem" items="stretch" vertical>
      <plus-prism ref={prism1Ref}>const now = 0;</plus-prism>
      <plus-prism sync ref={prism2Ref}>
        const now = 0;
      </plus-prism>
      <plus-center>
        <button onClick={onClick}>Change</button>
      </plus-center>
    </plus-stack>
  );
}
export default App;
