import '@htmlplus/ui/format-bytes.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack vertical>
      <plus-format-bytes value={-1000}></plus-format-bytes>
      <plus-format-bytes value={-1000} signed></plus-format-bytes>
      <plus-format-bytes value={0}></plus-format-bytes>
      <plus-format-bytes value={0} signed></plus-format-bytes>
      <plus-format-bytes value={1000}></plus-format-bytes>
      <plus-format-bytes value={1000} signed></plus-format-bytes>
    </plus-stack>
  );
}
export default App;
