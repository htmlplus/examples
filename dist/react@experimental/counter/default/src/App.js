import { useState } from 'react';
import '@htmlplus/core/counter.js';
const CounterDefault = () => {
  const [play, setPlay] = useState(false);
  return (
    <div className="center">
      <plus-counter
        duration="2000"
        from="10000"
        to="50000"
        separator=","
        play={play}
        onplus-complete={() => setPlay(false)}
      ></plus-counter>
      <br />
      <button onClick={() => setPlay(true)}>Start</button>
    </div>
  );
};
export default CounterDefault;
