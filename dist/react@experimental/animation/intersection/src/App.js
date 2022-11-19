import { useState } from 'react';
import '@htmlplus/core/animation.js';
import '@htmlplus/core/intersection.js';
import '@htmlplus/core/animation/names/attention-seekers/heart-beat.js';
const AnimationIntersection = () => {
  const [run, setRun] = useState(false);
  const onChange = (event) => {
    setRun(event.detail.isIntersecting);
  };
  return (
    <div className="container">
      <plus-intersection onplus-change={(event) => onChange(event)}>
        <plus-animation name="heart-beat" run={run}></plus-animation>
      </plus-intersection>
    </div>
  );
};
export default AnimationIntersection;
