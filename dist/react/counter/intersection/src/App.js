import { useState } from 'react';
import { Counter, Intersection } from '@htmlplus/react';
const CounterIntersection = () => {
  const [play, setPlay] = useState(false);
  const onChange = (event) => {
    setPlay(event.detail.isIntersecting);
  };
  return (
    <div className="container">
      <Intersection onChange={(event) => onChange(event)}>
        <Counter to="50000" play={play}></Counter>
      </Intersection>
    </div>
  );
};
export default CounterIntersection;
