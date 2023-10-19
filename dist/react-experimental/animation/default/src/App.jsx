import '@htmlplus/core/animation.js';
import '@htmlplus/core/center.js';

function App() {
  return (
    <plus-center>
      <plus-animation iterations={Infinity} name="fade-in" run></plus-animation>
    </plus-center>
  );
}
export default App;
