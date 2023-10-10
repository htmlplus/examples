import { Accordion, Faker } from '@htmlplus/react';

function App() {
  return (
    <>
      <Accordion summary="First">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Second">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Third" disabled>
        <Faker></Faker>
      </Accordion>
    </>
  );
}
export default App;
