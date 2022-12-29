import { Center, Counter } from '@htmlplus/react';
const CounterSeparatorDecimal = () => {
  return (
    <Center>
      <Counter
        decimal="."
        decimals="3"
        separator=","
        to="10000000"
        play
      ></Counter>
    </Center>
  );
};
export default CounterSeparatorDecimal;
