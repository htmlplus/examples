import '@htmlplus/core/animation.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/animation/names/attention-seekers/tada.js';
const AnimationButton = () => {
  return (
    <plus-center>
      <plus-animation id="animation1" name="tada">
        <button onClick={() => (window.animation1.run = true)}>Click Me</button>
      </plus-animation>
    </plus-center>
  );
};
export default AnimationButton;
