import '@htmlplus/ui/icon.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="2rem">
      <plus-icon name="house"></plus-icon>
      <plus-icon name="house" flip="horizontal"></plus-icon>
      <plus-icon name="house" flip="vertical"></plus-icon>
      <plus-icon name="house" flip="both"></plus-icon>
    </plus-stack>
  );
}
export default App;
