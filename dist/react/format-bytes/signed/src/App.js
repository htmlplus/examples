import { Center, Format } from '@htmlplus/react';
const FormatBytesSigned = () => {
  return (
    <Center>
      <Format.Bytes value="-1000"></Format.Bytes>
      <Format.Bytes value="-1000" signed></Format.Bytes>
      <Format.Bytes value="0"></Format.Bytes>
      <Format.Bytes value="0" signed></Format.Bytes>
      <Format.Bytes value="1000"></Format.Bytes>
      <Format.Bytes value="1000" signed></Format.Bytes>
    </Center>
  );
};
export default FormatBytesSigned;
