import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/stack.js';

function App() {
  return (
    <plus-accordion>
      <plus-stack slot="summary" justify-content="space-between">
        <b>Summary</b>
        <button>Action</button>
      </plus-stack>
      <plus-faker></plus-faker>
    </plus-accordion>
  );
}
export default App;
