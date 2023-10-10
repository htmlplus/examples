import '@htmlplus/core/spinner.js';
import '@htmlplus/core/stack.js';

function App() {
  return (
    <plus-stack gap="2rem">
      <plus-spinner type="default"></plus-spinner>
      <plus-spinner type="double-bounce"></plus-spinner>
      <plus-spinner type="ring"></plus-spinner>
      <plus-spinner type="ripple"></plus-spinner>
      <plus-spinner type="dual-ring"></plus-spinner>
      <plus-spinner type="square"></plus-spinner>
    </plus-stack>
  );
}
export default App;
