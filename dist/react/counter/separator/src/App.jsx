import '@htmlplus/ui/center.js';
import '@htmlplus/ui/counter.js';

function App() {
  return (
    <plus-center>
      <plus-counter separator="," to={10000000} play></plus-counter>
    </plus-center>
  );
}
export default App;
