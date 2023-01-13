import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesFormatting = () => {
  return (
    <Center>
      <FormatBytes value="1500"></FormatBytes>
      <FormatBytes value="800000000"></FormatBytes>
      <FormatBytes value="6900000000"></FormatBytes>
      <FormatBytes value="222000000000000"></FormatBytes>
    </Center>
  );
};
export default FormatBytesFormatting;
