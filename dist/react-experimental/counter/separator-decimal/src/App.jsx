import '@htmlplus/core/center.js';
import '@htmlplus/core/counter.js';

function App() {
  return (
    <plus-center>
      <plus-counter decimal="." decimals={2} separator="," to={1000} play></plus-counter>
    </plus-center>
  );
}
export default App;
