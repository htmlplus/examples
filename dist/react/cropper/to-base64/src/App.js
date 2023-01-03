import { Center, Cropper } from '@htmlplus/react';
const CropperToBase64 = () => {
  const toBase64 = () => {
    const image = new Image();
    image.src = window.cropper2.toCanvas().toDataURL();
    const tab = window.open('', '_blank');
    tab.onload = () => {
      tab.document.write(image.outerHTML);
    };
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
        <button onClick={() => toBase64()}>Get Base64</button>
      </Center>
    </>
  );
};
export default CropperToBase64;
