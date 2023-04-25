import { FormatBytes, Stack } from '@htmlplus/react';
const FormatBytesUnit = () => {
  return (
    <Stack vertical>
      <FormatBytes unit="auto" value="1000"></FormatBytes>
      <FormatBytes unit="base" value="10000"></FormatBytes>
      <FormatBytes unit="kilo" value="100000"></FormatBytes>
      <FormatBytes unit="kilo" value="1000000"></FormatBytes>
      <FormatBytes unit="kilo" value="10000000"></FormatBytes>
      <FormatBytes unit="kilo" value="100000000"></FormatBytes>
      <FormatBytes unit="kilo" value="1000000000"></FormatBytes>
    </Stack>
  );
};
export default FormatBytesUnit;
