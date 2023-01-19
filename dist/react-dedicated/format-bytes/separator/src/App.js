import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesSeparator = () => {
  return (
    <Center>
      <FormatBytes value="1000" separator=""></FormatBytes>
      <FormatBytes value="1000" separator=" "></FormatBytes>
    </Center>
  );
};
export default FormatBytesSeparator;
