import { Animation } from '@htmlplus/react';
const AnimationMethods = () => {
  return (
    <div className="center">
      <Animation id="element2" iterations="3" name="fade-out"></Animation>
      <br />
      <button onClick={() => window.element2.cancel()}>Cancel</button>
      <button onClick={() => window.element2.finish()}>Finish</button>
      <button onClick={() => window.element2.pause()}>Pause</button>
      <button onClick={() => window.element2.play()}>Play</button>
    </div>
  );
};
export default AnimationMethods;
