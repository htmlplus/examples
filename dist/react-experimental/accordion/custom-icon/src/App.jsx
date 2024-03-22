import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/icon.js';

function App() {
  return (
    <plus-accordion summary="First">
      <plus-icon slot="icon-expand" name="plus"></plus-icon>
      <plus-icon slot="icon-collapse" name="dash"></plus-icon>
      <plus-faker></plus-faker>
    </plus-accordion>
  );
}
export default App;
