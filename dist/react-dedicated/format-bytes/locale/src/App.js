import { FormatBytes, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack vertical>
      <FormatBytes value={10000100} locale="en" unit="kilo"></FormatBytes>
      <FormatBytes value={10000100} locale="de" unit="kilo"></FormatBytes>
    </Stack>
  );
}
export default App;
