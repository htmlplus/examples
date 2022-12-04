import { Animation, Center } from '@htmlplus/react';
const AnimationMethods = () => {
  return (
    <>
      <Center>
        <Animation id="element2" iterations="3" name="fade-out"></Animation>
      </Center>
      <br />
      <Center>
        <button onClick={() => window.element2.cancel()}>Cancel</button>
        <button onClick={() => window.element2.finish()}>Finish</button>
        <button onClick={() => window.element2.pause()}>Pause</button>
        <button onClick={() => window.element2.play()}>Play</button>
      </Center>
    </>
  );
};
export default AnimationMethods;
