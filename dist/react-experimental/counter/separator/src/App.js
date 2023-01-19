import '@htmlplus/core/center.js';
import '@htmlplus/core/counter.js';
const CounterSeparator = () => {
  return (
    <plus-center>
      <plus-counter separator="," to="10000000" play></plus-counter>
    </plus-center>
  );
};
export default CounterSeparator;
