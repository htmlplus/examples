import { FormatBytes, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack vertical>
      <FormatBytes value={1000} display="short"></FormatBytes>
      <FormatBytes value={1000} display="long"></FormatBytes>
    </Stack>
  );
}
export default App;
