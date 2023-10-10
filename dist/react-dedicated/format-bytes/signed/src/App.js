import { FormatBytes, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack vertical>
      <FormatBytes value={-1000}></FormatBytes>
      <FormatBytes value={-1000} signed></FormatBytes>
      <FormatBytes value={0}></FormatBytes>
      <FormatBytes value={0} signed></FormatBytes>
      <FormatBytes value={1000}></FormatBytes>
      <FormatBytes value={1000} signed></FormatBytes>
    </Stack>
  );
}
export default App;
