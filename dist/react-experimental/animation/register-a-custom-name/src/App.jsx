import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/avatar.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-avatar shape="circle">
        <plus-animation
          delay={0}
          duration={2000}
          iterations={Infinity}
          name="custom-pulse"
          run
        ></plus-animation>
        <plus-animation
          delay={1000}
          duration={2000}
          iterations={Infinity}
          name="custom-pulse"
          run
        ></plus-animation>
        <img src="https://picsum.photos/id/64/90/90" />
      </plus-avatar>
    </plus-center>
  );
}
export default App;
