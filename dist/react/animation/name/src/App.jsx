import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/animation/names/flippers/flip-in-x.js';
import '@htmlplus/ui/animation/names/flippers/flip-in-y.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack
      gap="1rem"
      justify="evenly"
      overrides={{
        xs: {
          vertical: true
        },
        sm: {
          vertical: false
        }
      }}
    >
      <plus-animation iterations={Infinity} name="flip-in-x" run></plus-animation>
      <plus-animation iterations={Infinity} name="flip-in-y" run></plus-animation>
    </plus-stack>
  );
}
export default App;
