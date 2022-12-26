import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';
const SignatureSave = () => {
  const save = (background) => {
    const image = new Image();
    image.src = window.signature3.toDataURL('image/svg+xml', background);
    const tab = window.open('', '_blank');
    tab.onload = () => {
      tab.document.write(image.outerHTML);
    };
  };
  return (
    <>
      <plus-center>
        <plus-signature
          id="signature3"
          background-color="lightgray"
        ></plus-signature>
      </plus-center>
      <br />
      <plus-center>
        <button onClick={() => save(true)}>Save With Background</button>
        &nbsp; &nbsp;
        <button onClick={() => save(false)}>Save Without Background</button>
      </plus-center>
    </>
  );
};
export default SignatureSave;
