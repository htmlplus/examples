import { Animation, Center } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Animation duration={2500} iterations={Infinity} name="fade-in" run></Animation>
    </Center>
  );
}
export default App;
