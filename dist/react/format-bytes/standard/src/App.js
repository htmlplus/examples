import { Center, Format } from '@htmlplus/react';
const FormatBytesStandard = () => {
  return (
    <Center>
      <Format.Bytes value="1000" standard="METRIC"></Format.Bytes>
      <Format.Bytes value="1024" standard="IEC"></Format.Bytes>
    </Center>
  );
};
export default FormatBytesStandard;
