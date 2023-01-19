import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesDisplay = () => {
  return (
    <Center>
      <FormatBytes value="1000" display="short"></FormatBytes>
      <FormatBytes value="1000" display="long"></FormatBytes>
    </Center>
  );
};
export default FormatBytesDisplay;
