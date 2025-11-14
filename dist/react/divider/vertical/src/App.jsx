import '@htmlplus/ui/divider.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack>
      <plus-faker></plus-faker>
      <plus-divider orientation="vertical">OR</plus-divider>
      <plus-faker></plus-faker>
    </plus-stack>
  );
}
export default App;
