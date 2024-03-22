import '@htmlplus/ui/divider.js';
import '@htmlplus/ui/faker.js';

function App() {
  return (
    <plus-stack>
      <plus-faker></plus-faker>
      <plus-divider vertical>OR</plus-divider>
      <plus-faker></plus-faker>
    </plus-stack>
  );
}
export default App;
