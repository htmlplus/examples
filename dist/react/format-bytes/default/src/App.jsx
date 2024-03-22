import '@htmlplus/ui/center.js';
import '@htmlplus/ui/format-bytes.js';

function App() {
  return (
    <plus-center>
      <plus-format-bytes value={1000}></plus-format-bytes>
    </plus-center>
  );
}
export default App;
