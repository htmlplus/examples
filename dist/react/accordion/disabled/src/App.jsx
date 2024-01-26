import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';

function App() {
  return (
    <>
      <plus-accordion summary="First">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Second">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Third" disabled>
        <plus-faker></plus-faker>
      </plus-accordion>
    </>
  );
}
export default App;
