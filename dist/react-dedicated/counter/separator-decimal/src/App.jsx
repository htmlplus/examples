import { Center, Counter } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Counter decimal="." decimals={2} separator="," to={1000} play></Counter>
    </Center>
  );
}
export default App;
