import { Center, Format } from '@htmlplus/react';
const FormatBytesLocale = () => {
  return (
    <Center>
      <Format.Bytes value="10000100" locale="en" unit="kilo"></Format.Bytes>
      <Format.Bytes value="10000100" locale="de" unit="kilo"></Format.Bytes>
    </Center>
  );
};
export default FormatBytesLocale;
