import '@htmlplus/core/center.js';
import '@htmlplus/core/cropper.js';
const CropperToURL = () => {
  const toURL = () => {
    window.cropper4.toCanvas().toBlob((blob) => {
      window.open(URL.createObjectURL(blob), '_blank');
    });
  };
  return (
    <>
      <plus-center>
        <plus-cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          id="cropper4"
        ></plus-cropper>
      </plus-center>
      <br />
      <plus-center>
        <button onClick={() => toURL()}>To URL</button>
      </plus-center>
    </>
  );
};
export default CropperToURL;
