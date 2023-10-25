import { useRef } from 'react';

import { Accordion, Faker, Stack } from '@htmlplus/react';

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
      <Stack gap="1rem">
        <button onClick={onClick1}>Collapse</button>
        <button onClick={onClick2}>Expand</button>
        <button onClick={onClick3}>Toggle</button>
      </Stack>
      <br />
      <Accordion summary="Summary" ref={accordionRef}>
        <Faker></Faker>
      </Accordion>
    </>
  );
}
export default App;
