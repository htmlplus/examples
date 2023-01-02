import { Center, Cropper } from '@htmlplus/react';
const CropperToURL = () => {
  const toURL = () => {
    window.cropper3.toCanvas().toBlob((blob) => {
      window.open(URL.createObjectURL(blob), '_blank');
    });
  };
  return (
    <>
      <Center>
        <Cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          id="cropper3"
        ></Cropper>
      </Center>
      <br />
      <Center>
        <button onClick={() => toURL()}>To URL</button>
      </Center>
    </>
  );
};
export default CropperToURL;
