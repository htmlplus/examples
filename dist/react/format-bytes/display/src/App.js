import { Center, Format } from '@htmlplus/react';
const FormatBytesDisplay = () => {
  return (
    <Center>
      <Format.Bytes value="1000" display="short"></Format.Bytes>
      <Format.Bytes value="1000" display="long"></Format.Bytes>
    </Center>
  );
};
export default FormatBytesDisplay;
