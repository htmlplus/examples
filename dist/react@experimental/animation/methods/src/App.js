import '@htmlplus/core/animation.js';
const AnimationMethods = () => {
  return (
    <div className="center">
      <plus-animation
        id="element2"
        iterations="3"
        name="fade-out"
      ></plus-animation>
      <br />
      <button onClick={() => window.element2.cancel()}>Cancel</button>
      <button onClick={() => window.element2.finish()}>Finish</button>
      <button onClick={() => window.element2.pause()}>Pause</button>
      <button onClick={() => window.element2.play()}>Play</button>
    </div>
  );
};
export default AnimationMethods;
