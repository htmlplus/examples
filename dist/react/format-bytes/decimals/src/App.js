import { Center, Format } from '@htmlplus/react';
const FormatBytesDecimals = () => {
  return (
    <Center>
      <Format.Bytes value="1200" decimals="0"></Format.Bytes>
      <Format.Bytes value="1200" decimals="3"></Format.Bytes>
      <Format.Bytes value="1200" decimals="[3, 3]"></Format.Bytes>
      <Format.Bytes value="1000" decimals="[0, 3]"></Format.Bytes>
      <Format.Bytes value="1000" decimals="[1, 3]"></Format.Bytes>
      <Format.Bytes value="1001" decimals="[0, 3]"></Format.Bytes>
    </Center>
  );
};
export default FormatBytesDecimals;
