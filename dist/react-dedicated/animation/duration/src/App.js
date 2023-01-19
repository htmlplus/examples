import { Animation, Center } from '@htmlplus/react';
const AnimationDuration = () => {
  return (
    <Center>
      <Animation
        duration="2500"
        iterations="Infinity"
        name="fade-in"
        run
      ></Animation>
    </Center>
  );
};
export default AnimationDuration;
