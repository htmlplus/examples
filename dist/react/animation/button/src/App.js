import { Animation } from '@htmlplus/react';
const AnimationButton = () => {
  return (
    <div className="center">
      <Animation id="animation1" name="tada">
        <button onClick={() => (window.animation1.run = true)}>Click Me</button>
      </Animation>
    </div>
  );
};
export default AnimationButton;
