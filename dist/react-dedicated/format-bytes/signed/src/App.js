import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesSigned = () => {
  return (
    <Center>
      <FormatBytes value="-1000"></FormatBytes>
      <FormatBytes value="-1000" signed></FormatBytes>
      <FormatBytes value="0"></FormatBytes>
      <FormatBytes value="0" signed></FormatBytes>
      <FormatBytes value="1000"></FormatBytes>
      <FormatBytes value="1000" signed></FormatBytes>
    </Center>
  );
};
export default FormatBytesSigned;
