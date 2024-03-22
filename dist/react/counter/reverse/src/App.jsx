import '@htmlplus/ui/center.js';
import '@htmlplus/ui/counter.js';

function App() {
  return (
    <plus-center>
      <plus-counter from={1000} to={10} play></plus-counter>
    </plus-center>
  );
}
export default App;
