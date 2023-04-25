import { FormatBytes, Stack } from '@htmlplus/react';
const FormatBytesSeparator = () => {
  return (
    <Stack vertical>
      <FormatBytes value="1000" separator=""></FormatBytes>
      <FormatBytes value="1000" separator=" "></FormatBytes>
    </Stack>
  );
};
export default FormatBytesSeparator;
