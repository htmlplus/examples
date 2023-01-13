import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesStandard = () => {
  return (
    <Center>
      <FormatBytes value="1000" standard="METRIC"></FormatBytes>
      <FormatBytes value="1024" standard="IEC"></FormatBytes>
    </Center>
  );
};
export default FormatBytesStandard;
