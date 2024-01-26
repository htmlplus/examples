import '@htmlplus/core/center.js';
import '@htmlplus/core/format-bytes.js';

function App() {
  return (
    <plus-center>
      <plus-format-bytes value={1000}></plus-format-bytes>
    </plus-center>
  );
}
export default App;
