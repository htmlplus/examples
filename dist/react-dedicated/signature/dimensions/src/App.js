import { Center, Signature } from '@htmlplus/react';
const SignatureDimensions = () => {
  return (
    <Center>
      <Signature
        backgroundColor="lightgray"
        style={{
          width: '480px',
          height: '320px'
        }}
      ></Signature>
    </Center>
  );
};
export default SignatureDimensions;
