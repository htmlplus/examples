import '@htmlplus/core/center.js';
import '@htmlplus/core/cropper.js';
const CropperToBlob = () => {
  const toBlob = () => {
    window.cropper3.toCanvas().toBlob((blob) => {
      console.log(blob);
    });
  };
  return (
    <>
      <plus-center>
        <plus-cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          id="cropper3"
        ></plus-cropper>
      </plus-center>
      <br />
      <plus-center>
        <button onClick={() => toBlob()}>To Blob</button>
      </plus-center>
    </>
  );
};
export default CropperToBlob;
