import '@htmlplus/ui/card.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="1rem" justify="evenly" wrap>
      <plus-card className="pink"></plus-card>
      <plus-card className="yellow"></plus-card>
      <plus-card className="blue"></plus-card>
    </plus-stack>
  );
}
export default App;
