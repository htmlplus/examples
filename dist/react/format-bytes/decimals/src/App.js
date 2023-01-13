import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesDecimals = () => {
  return (
    <Center>
      <FormatBytes value="1200" decimals="0"></FormatBytes>
      <FormatBytes value="1200" decimals="3"></FormatBytes>
      <FormatBytes value="1200" decimals="[3, 3]"></FormatBytes>
      <FormatBytes value="1000" decimals="[0, 3]"></FormatBytes>
      <FormatBytes value="1000" decimals="[1, 3]"></FormatBytes>
      <FormatBytes value="1001" decimals="[0, 3]"></FormatBytes>
    </Center>
  );
};
export default FormatBytesDecimals;
