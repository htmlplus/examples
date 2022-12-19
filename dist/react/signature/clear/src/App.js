import { Center, Signature } from '@htmlplus/react';
const SignatureClear = () => {
  return (
    <>
      <Center>
        <Signature id="signature1" backgroundColor="lightgray"></Signature>
      </Center>
      <br />
      <Center>
        <button onClick={() => window.signature1.clear()}>Clear</button>
      </Center>
    </>
  );
};
export default SignatureClear;
