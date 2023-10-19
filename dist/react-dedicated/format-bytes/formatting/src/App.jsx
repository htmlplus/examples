import { FormatBytes, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack vertical>
      <FormatBytes value={1500}></FormatBytes>
      <FormatBytes value={800000000}></FormatBytes>
      <FormatBytes value={6900000000}></FormatBytes>
      <FormatBytes value={222000000000000}></FormatBytes>
    </Stack>
  );
}
export default App;
