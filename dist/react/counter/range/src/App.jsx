import '@htmlplus/ui/center.js';
import '@htmlplus/ui/counter.js';

function App() {
  return (
    <plus-center>
      <plus-counter from={10} to={1000} play></plus-counter>
    </plus-center>
  );
}
export default App;
