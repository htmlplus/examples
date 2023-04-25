import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';
import '@htmlplus/core/stack.js';
const SignatureSave = () => {
  const save = (background) => {
    const image = new Image();
    image.src = window.signature3.toDataURL('image/svg+xml', background);
    const tab = window.open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
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
      <plus-stack gap="1rem">
        <button onClick={() => save(true)}>Save With Background</button>
        <button onClick={() => save(false)}>Save Without Background</button>
      </plus-stack>
    </>
  );
};
export default SignatureSave;
