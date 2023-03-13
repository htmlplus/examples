import '@htmlplus/core/animation.js';
import '@htmlplus/core/avatar.js';
import '@htmlplus/core/center.js';
const AnimationRegisterACustomName = () => {
  return (
    <plus-center>
      <plus-avatar shape="circle">
        <plus-animation
          delay="0000"
          duration="2000"
          iterations="Infinity"
          name="custom-pulse"
          run
        ></plus-animation>
        <plus-animation
          delay="1000"
          duration="2000"
          iterations="Infinity"
          name="custom-pulse"
          run
        ></plus-animation>
        <img src="https://picsum.photos/id/64/90/90" />
      </plus-avatar>
    </plus-center>
  );
};
export default AnimationRegisterACustomName;
