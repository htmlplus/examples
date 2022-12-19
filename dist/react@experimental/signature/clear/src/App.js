import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';
const SignatureClear = () => {
  return (
    <>
      <plus-center>
        <plus-signature
          id="signature1"
          background-color="lightgray"
        ></plus-signature>
      </plus-center>
      <br />
      <plus-center>
        <button onClick={() => window.signature1.clear()}>Clear</button>
      </plus-center>
    </>
  );
};
export default SignatureClear;
