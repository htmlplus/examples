import { Accordion, Faker } from '@htmlplus/react';

function App() {
  return (
    <div>
      <Accordion summary="First">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Second">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Third">
        <Faker></Faker>
      </Accordion>
    </div>
  );
}
export default App;
