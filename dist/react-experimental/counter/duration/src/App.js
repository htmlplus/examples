import '@htmlplus/core/center.js';
import '@htmlplus/core/counter.js';

function App() {
  return (
    <plus-center>
      <plus-counter duration={5000} to={1000} play></plus-counter>
    </plus-center>
  );
}
export default App;
