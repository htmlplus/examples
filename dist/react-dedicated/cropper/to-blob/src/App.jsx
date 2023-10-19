import { useRef } from 'react';

import { Center, Cropper } from '@htmlplus/react';

function App() {
  const cropperRef = useRef();
  function onClick() {
    cropperRef.current.toCanvas().toBlob((blob) => {
      console.log(blob);
    });
  }
  return (
    <>
      <Center>
        <Cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          ref={cropperRef}
        ></Cropper>
      </Center>
      <br />
      <Center>
        <button onClick={onClick}>To Blob</button>
      </Center>
    </>
  );
}
export default App;
