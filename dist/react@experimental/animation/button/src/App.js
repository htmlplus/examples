import '@htmlplus/core/animation.js';
const AnimationButton = () => {
  return (
    <div className="center">
      <plus-animation id="animation1" name="tada">
        <button onClick={() => (window.animation1.run = true)}>Click Me</button>
      </plus-animation>
    </div>
  );
};
export default AnimationButton;
