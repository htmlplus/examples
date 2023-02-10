import '@htmlplus/core/center.js';
import '@htmlplus/core/cropper.js';
const CropperToBase64 = () => {
  const toBase64 = () => {
    const image = new Image();
    image.src = window.cropper2.toCanvas().toDataURL();
    const tab = window.open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  };
  return (
    <>
      <plus-center>
        <plus-cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          id="cropper2"
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
