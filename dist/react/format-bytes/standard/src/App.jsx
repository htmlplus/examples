import '@htmlplus/core/format-bytes.js';
import '@htmlplus/core/stack.js';

function App() {
  return (
    <plus-stack vertical>
      <plus-format-bytes value={1000} standard="METRIC"></plus-format-bytes>
      <plus-format-bytes value={1024} standard="IEC"></plus-format-bytes>
    </plus-stack>
  );
}
export default App;
