import '@htmlplus/core/center.js';
import '@htmlplus/core/cropper.js';
const CropperToBase64 = () => {
  const toBase64 = () => {
    const image = new Image();
    image.src = window.cropper1.toCanvas().toDataURL();
    const tab = window.open('', '_blank');
    tab.onload = () => {
      tab.document.write(image.outerHTML);
    };
  };
  return (
    <>
      <plus-center>
        <plus-cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          id="cropper1"
        ></plus-cropper>
      </plus-center>
      <br />
      <plus-center>
        <button onClick={() => toBase64()}>Get Base64</button>
      </plus-center>
    </>
  );
};
export default CropperToBase64;
