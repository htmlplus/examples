import { Center, Counter } from '@htmlplus/react';
const CounterSeparator = () => {
  return (
    <Center>
      <Counter separator="," to="10000000" play></Counter>
    </Center>
  );
};
export default CounterSeparator;
