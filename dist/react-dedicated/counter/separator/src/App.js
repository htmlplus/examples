import { Center, Counter } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Counter separator="," to={10000000} play></Counter>
    </Center>
  );
}
export default App;
