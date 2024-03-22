import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';

function App() {
  return (
    <div>
      <plus-accordion summary="First">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Second">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Third">
        <plus-faker></plus-faker>
      </plus-accordion>
    </div>
  );
}
export default App;
