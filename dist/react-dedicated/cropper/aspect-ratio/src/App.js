import { Cropper } from '@htmlplus/react';
const CropperAspectRatio = () => {
  return (
    <Cropper
      aspectRatio="3/4"
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    ></Cropper>
  );
};
export default CropperAspectRatio;
