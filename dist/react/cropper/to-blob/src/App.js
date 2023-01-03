import { Center, Cropper } from '@htmlplus/react';
const CropperToBlob = () => {
  const toBlob = () => {
    window.cropper2.toCanvas().toBlob((blob) => {
      console.log(blob);
    });
  };
  return (
    <>
      <Center>
        <Cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          id="cropper2"
        ></Cropper>
      </Center>
      <br />
      <Center>
        <button onClick={() => toBlob()}>To Blob</button>
      </Center>
    </>
  );
};
export default CropperToBlob;
