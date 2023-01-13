import { Center, Format } from '@htmlplus/react';
const FormatBytesFormatting = () => {
  return (
    <Center>
      <Format.Bytes value="1500"></Format.Bytes>
      <Format.Bytes value="800000000"></Format.Bytes>
      <Format.Bytes value="6900000000"></Format.Bytes>
      <Format.Bytes value="222000000000000"></Format.Bytes>
    </Center>
  );
};
export default FormatBytesFormatting;
