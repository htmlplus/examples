import '@htmlplus/ui/card.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="1rem" justify="evenly" wrap>
      <plus-card className="pink" outlined></plus-card>
      <plus-card className="yellow" outlined></plus-card>
      <plus-card className="blue" outlined></plus-card>
    </plus-stack>
  );
}
export default App;
