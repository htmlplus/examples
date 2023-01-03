import '@htmlplus/core/animation.js';
import '@htmlplus/core/center.js';
const AnimationMethods = () => {
  return (
    <>
      <plus-center>
        <plus-animation
          id="animation4"
          iterations="3"
          name="fade-out"
        ></plus-animation>
      </plus-center>
      <br />
      <plus-center>
        <button onClick={() => window.animation4.cancel()}>Cancel</button>
        <button onClick={() => window.animation4.finish()}>Finish</button>
        <button onClick={() => window.animation4.pause()}>Pause</button>
        <button onClick={() => window.animation4.play()}>Play</button>
      </plus-center>
    </>
  );
};
export default AnimationMethods;
