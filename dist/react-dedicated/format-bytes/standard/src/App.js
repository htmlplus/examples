import { FormatBytes, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack vertical>
      <FormatBytes value={1000} standard="METRIC"></FormatBytes>
      <FormatBytes value={1024} standard="IEC"></FormatBytes>
    </Stack>
  );
}
export default App;
