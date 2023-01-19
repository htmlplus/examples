import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesLocale = () => {
  return (
    <Center>
      <FormatBytes value="10000100" locale="en" unit="kilo"></FormatBytes>
      <FormatBytes value="10000100" locale="de" unit="kilo"></FormatBytes>
    </Center>
  );
};
export default FormatBytesLocale;
