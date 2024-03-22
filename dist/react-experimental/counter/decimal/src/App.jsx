import '@htmlplus/ui/center.js';
import '@htmlplus/ui/counter.js';

function App() {
  return (
    <plus-center>
      <plus-counter decimal="/" decimals={3} to={1000} play></plus-counter>
    </plus-center>
  );
}
export default App;
