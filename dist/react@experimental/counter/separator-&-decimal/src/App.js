import '@htmlplus/core/center.js';
import '@htmlplus/core/counter.js';
const CounterSeparatorDecimal = () => {
  return (
    <plus-center>
      <plus-counter
        decimal="."
        decimals="3"
        separator=","
        to="10000000"
        play
      ></plus-counter>
    </plus-center>
  );
};
export default CounterSeparatorDecimal;
