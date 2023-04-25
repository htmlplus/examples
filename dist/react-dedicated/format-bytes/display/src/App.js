import { FormatBytes, Stack } from '@htmlplus/react';
const FormatBytesDisplay = () => {
  return (
    <Stack vertical>
      <FormatBytes value="1000" display="short"></FormatBytes>
      <FormatBytes value="1000" display="long"></FormatBytes>
    </Stack>
  );
};
export default FormatBytesDisplay;
