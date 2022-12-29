import { useState } from 'react';
import '@htmlplus/core/counter.js';
import '@htmlplus/core/intersection.js';
const CounterIntersection = () => {
  const [play, setPlay] = useState(false);
  const onChange = (event) => {
    setPlay(event.detail.isIntersecting);
  };
  return (
    <div className="container">
      <plus-intersection onplus-change={(event) => onChange(event)}>
        <plus-counter to="1000" play={play}></plus-counter>
      </plus-intersection>
    </div>
  );
};
export default CounterIntersection;
