import '@htmlplus/ui/card.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="1rem" justify="evenly" wrap>
      <plus-card class="pink"></plus-card>
      <plus-card class="yellow"></plus-card>
      <plus-card class="blue"></plus-card>
    </plus-stack>
  );
}
export default App;
