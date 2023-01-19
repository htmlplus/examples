import { Center, Counter } from '@htmlplus/react';
const CounterDecimal = () => {
  return (
    <Center>
      <Counter decimal="/" decimals="3" to="1000" play></Counter>
    </Center>
  );
};
export default CounterDecimal;
