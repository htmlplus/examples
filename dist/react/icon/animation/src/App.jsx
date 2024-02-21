import '@htmlplus/core/animation.js';
import '@htmlplus/core/animation/names/attention-seekers/pulse.js';
import '@htmlplus/core/animation/names/attention-seekers/swing.js';
import '@htmlplus/core/animation/names/attention-seekers/tada.js';
import '@htmlplus/core/icon.js';
import '@htmlplus/core/stack.js';

function App() {
  return (
    <plus-stack gap="2rem">
      <plus-animation duration={1000} iterations={Infinity} name="pulse" run>
        <plus-icon name="heart"></plus-icon>
      </plus-animation>
      <plus-animation duration={1000} iterations={Infinity} name="swing" run>
        <plus-icon name="telephone"></plus-icon>
      </plus-animation>
      <plus-animation duration={2000} iterations={Infinity} name="tada" run>
        <plus-icon name="bell"></plus-icon>
      </plus-animation>
    </plus-stack>
  );
}
export default App;
