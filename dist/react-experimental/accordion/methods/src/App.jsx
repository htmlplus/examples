import { useRef } from 'react';

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/stack.js';

function App() {
  const accordionRef = useRef();
  function onClick1() {
    accordionRef.current.collapse();
  }
  function onClick2() {
    accordionRef.current.expand();
  }
  function onClick3() {
    accordionRef.current.toggle();
  }
  return (
    <>
      <plus-stack gap="1rem">
        <button onclick={onClick1}>Collapse</button>
        <button onclick={onClick2}>Expand</button>
        <button onclick={onClick3}>Toggle</button>
      </plus-stack>
      <br />
      <plus-accordion summary="Summary" ref={accordionRef}>
        <plus-faker></plus-faker>
      </plus-accordion>
    </>
  );
}
export default App;
