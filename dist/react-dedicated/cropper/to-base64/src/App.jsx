import { useRef } from 'react';

import { Center, Cropper } from '@htmlplus/react';

function App() {
  const cropperRef = useRef();
  function onClick() {
    const image = new Image();
    image.src = cropperRef.current.toCanvas().toDataURL();
    const tab = open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
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
        <button onClick={onClick}>To Base64</button>
      </Center>
    </>
  );
}
export default App;
