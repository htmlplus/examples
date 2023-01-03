import { Animation, Center } from '@htmlplus/react';
const AnimationMethods = () => {
  return (
    <>
      <Center>
        <Animation id="animation4" iterations="3" name="fade-out"></Animation>
      </Center>
      <br />
      <Center>
        <button onClick={() => window.animation4.cancel()}>Cancel</button>
        <button onClick={() => window.animation4.finish()}>Finish</button>
        <button onClick={() => window.animation4.pause()}>Pause</button>
        <button onClick={() => window.animation4.play()}>Play</button>
      </Center>
    </>
  );
};
export default AnimationMethods;
