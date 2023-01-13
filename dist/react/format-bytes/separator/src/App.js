import { Center, Format } from '@htmlplus/react';
const FormatBytesSeparator = () => {
  return (
    <Center>
      <Format.Bytes value="1000" separator=""></Format.Bytes>
      <Format.Bytes value="1000" separator=" "></Format.Bytes>
    </Center>
  );
};
export default FormatBytesSeparator;
