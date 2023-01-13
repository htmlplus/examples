import { Center, Format } from '@htmlplus/react';
const FormatBytesUnit = () => {
  return (
    <Center>
      <Format.Bytes unit="auto" value="1000"></Format.Bytes>
      <Format.Bytes unit="base" value="10000"></Format.Bytes>
      <Format.Bytes unit="kilo" value="100000"></Format.Bytes>
      <Format.Bytes unit="kilo" value="1000000"></Format.Bytes>
      <Format.Bytes unit="kilo" value="10000000"></Format.Bytes>
      <Format.Bytes unit="kilo" value="100000000"></Format.Bytes>
      <Format.Bytes unit="kilo" value="1000000000"></Format.Bytes>
    </Center>
  );
};
export default FormatBytesUnit;
