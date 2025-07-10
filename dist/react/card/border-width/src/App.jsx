import '@htmlplus/ui/card.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="1rem" justify="evenly" wrap>
      <plus-card class="size-1" outlined></plus-card>
      <plus-card class="size-2" outlined></plus-card>
      <plus-card class="size-3" outlined></plus-card>
    </plus-stack>
  );
}
export default App;
