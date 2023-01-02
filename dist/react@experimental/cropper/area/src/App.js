import '@htmlplus/core/cropper.js';
const CropperArea = () => {
  return (
    <plus-cropper
      area={1}
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    ></plus-cropper>
  );
};
export default CropperArea;
