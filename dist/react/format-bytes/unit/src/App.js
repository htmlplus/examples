import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesUnit = () => {
  return (
    <Center>
      <FormatBytes unit="auto" value="1000"></FormatBytes>
      <FormatBytes unit="base" value="10000"></FormatBytes>
      <FormatBytes unit="kilo" value="100000"></FormatBytes>
      <FormatBytes unit="kilo" value="1000000"></FormatBytes>
      <FormatBytes unit="kilo" value="10000000"></FormatBytes>
      <FormatBytes unit="kilo" value="100000000"></FormatBytes>
      <FormatBytes unit="kilo" value="1000000000"></FormatBytes>
    </Center>
  );
};
export default FormatBytesUnit;
