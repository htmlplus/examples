import '@htmlplus/core/center.js';
import '@htmlplus/core/counter.js';
const CounterSeparatorDecimal = () => {
  return (
    <plus-center>
      <plus-counter
        decimal="."
        decimals="2"
        separator=","
        to="1000"
        play
      ></plus-counter>
    </plus-center>
  );
};
export default CounterSeparatorDecimal;
