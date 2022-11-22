import { Animation, Avatar } from '@htmlplus/react';
const AnimationRegisterACustomName = () => {
  return (
    <div className="root">
      <Avatar shape="circle">
        <Animation
          delay="0000"
          duration="2000"
          iterations="Infinity"
          name="custom-pulse"
          run
        ></Animation>
        <Animation
          delay="1000"
          duration="2000"
          iterations="Infinity"
          name="custom-pulse"
          run
        ></Animation>
        <img src="http://placeimg.com/94/94/people" />
      </Avatar>
    </div>
  );
};
export default AnimationRegisterACustomName;
