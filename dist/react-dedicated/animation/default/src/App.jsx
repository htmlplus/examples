import { Animation, Center } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Animation iterations={Infinity} name="fade-in" run></Animation>
    </Center>
  );
}
export default App;
