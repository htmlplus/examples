import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';
const SignatureDimensions = () => {
  return (
    <plus-center>
      <plus-signature
        background-color="lightgray"
        style={{
          width: '480px',
          height: '320px'
        }}
      ></plus-signature>
    </plus-center>
  );
};
export default SignatureDimensions;
