import '@htmlplus/ui/card.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="1rem" justify="evenly" wrap>
      <plus-card class="pink" outlined></plus-card>
      <plus-card class="yellow" outlined></plus-card>
      <plus-card class="blue" outlined></plus-card>
    </plus-stack>
  );
}
export default App;
