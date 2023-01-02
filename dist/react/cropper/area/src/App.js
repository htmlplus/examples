import { Cropper } from '@htmlplus/react';
const CropperArea = () => {
  return (
    <Cropper
      area={1}
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    ></Cropper>
  );
};
export default CropperArea;
