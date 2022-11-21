import { Animation, Avatar } from '@htmlplus/react';
import { setConfig } from '@htmlplus/core/config.js';
setConfig({
  component: {
    'plus-animation': {
      asset: {
        name: {
          'custom-pulse': [
            {
              offset: 0,
              opacity: '0.6',
              transform: 'scale(1.0)'
            },
            {
              offset: 1,
              opacity: '0.0',
              transform: 'scale(1.5)'
            }
          ]
        }
      }
    }
  }
});
const AnimationRegisterACustomName = () => {
  return (
    <div className="root">
      <Avatar shape="circle" size="xl">
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
