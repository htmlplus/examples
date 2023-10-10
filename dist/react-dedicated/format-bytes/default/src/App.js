import { Center, FormatBytes } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <FormatBytes value={1000}></FormatBytes>
    </Center>
  );
}
export default App;
