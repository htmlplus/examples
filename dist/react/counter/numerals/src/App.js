import { Center, Counter } from '@htmlplus/react';
const CounterNumerals = () => {
  return (
    <Center>
      <Counter
        numerals={['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']}
        to="1000000"
        play
      ></Counter>
    </Center>
  );
};
export default CounterNumerals;
