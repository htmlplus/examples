import '@htmlplus/core/animation.js';
const AnimationKeyframes = () => {
  let keyframes = [
    {
      transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',
      opacity: '1'
    },
    {
      transform: 'scale(7) rotate(960deg) translate(-50%, -50%)',
      opacity: '0'
    }
  ];
  return (
    <div className="root">
      <plus-animation
        duration="5000"
        iterations="Infinity"
        keyframes={keyframes}
        run
      ></plus-animation>
    </div>
  );
};
export default AnimationKeyframes;
