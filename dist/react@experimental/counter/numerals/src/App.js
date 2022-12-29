import '@htmlplus/core/center.js';
import '@htmlplus/core/counter.js';
const CounterNumerals = () => {
  return (
    <plus-center>
      <plus-counter
        numerals={['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']}
        to="1000000"
        play
      ></plus-counter>
    </plus-center>
  );
};
export default CounterNumerals;
