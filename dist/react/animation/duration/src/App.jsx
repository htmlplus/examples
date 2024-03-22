import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-animation duration={2500} iterations={Infinity} name="fade-in" run></plus-animation>
    </plus-center>
  );
}
export default App;
