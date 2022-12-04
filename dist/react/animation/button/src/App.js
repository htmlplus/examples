import { Animation, Center } from '@htmlplus/react';
import '@htmlplus/core/animation/names/attention-seekers/tada.js';
const AnimationButton = () => {
  return (
    <Center>
      <Animation id="animation1" name="tada">
        <button onClick={() => (window.animation1.run = true)}>Click Me</button>
      </Animation>
    </Center>
  );
};
export default AnimationButton;
