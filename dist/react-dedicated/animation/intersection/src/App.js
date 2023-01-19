import { useState } from 'react';
import { Animation, Intersection } from '@htmlplus/react';
import '@htmlplus/core/animation/names/attention-seekers/heart-beat.js';
const AnimationIntersection = () => {
  const [run, setRun] = useState(false);
  const onChange = (event) => {
    setRun(event.detail.isIntersecting);
  };
  return (
    <div className="container">
      <Intersection onChange={(event) => onChange(event)}>
        <Animation name="heart-beat" run={run}></Animation>
      </Intersection>
    </div>
  );
};
export default AnimationIntersection;
