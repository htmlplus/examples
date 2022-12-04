import '@htmlplus/core/animation.js';
import '@htmlplus/core/center.js';
const AnimationMethods = () => {
  return (
    <>
      <plus-center>
        <plus-animation
          id="element2"
          iterations="3"
          name="fade-out"
        ></plus-animation>
      </plus-center>
      <br />
      <plus-center>
        <button onClick={() => window.element2.cancel()}>Cancel</button>
        <button onClick={() => window.element2.finish()}>Finish</button>
        <button onClick={() => window.element2.pause()}>Pause</button>
        <button onClick={() => window.element2.play()}>Play</button>
      </plus-center>
    </>
  );
};
export default AnimationMethods;
