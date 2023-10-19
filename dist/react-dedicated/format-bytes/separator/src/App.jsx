import { FormatBytes, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack vertical>
      <FormatBytes value={1000} separator=""></FormatBytes>
      <FormatBytes value={1000} separator=" "></FormatBytes>
    </Stack>
  );
}
export default App;
