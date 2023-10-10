import '@htmlplus/core/format-bytes.js';
import '@htmlplus/core/stack.js';

function App() {
  return (
    <plus-stack vertical>
      <plus-format-bytes value={1500}></plus-format-bytes>
      <plus-format-bytes value={800000000}></plus-format-bytes>
      <plus-format-bytes value={6900000000}></plus-format-bytes>
      <plus-format-bytes value={222000000000000}></plus-format-bytes>
    </plus-stack>
  );
}
export default App;
