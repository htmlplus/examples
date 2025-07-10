import '@htmlplus/ui/card.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="1rem" justify="evenly" wrap>
      <plus-card tile></plus-card>
      <plus-card tile outlined></plus-card>
      <plus-card tile elevation={5}></plus-card>
    </plus-stack>
  );
}
export default App;
