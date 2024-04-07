import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/accordions.js';
import '@htmlplus/ui/faker.js';

function App() {
  return (
    <plus-accordions>
      <plus-accordion summary="First">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Second">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Third" disabled>
        <plus-faker></plus-faker>
      </plus-accordion>
    </plus-accordions>
  );
}
export default App;
