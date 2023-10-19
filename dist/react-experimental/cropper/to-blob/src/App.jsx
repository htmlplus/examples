import { useRef } from 'react';

import '@htmlplus/core/center.js';
import '@htmlplus/core/cropper.js';

function App() {
  const cropperRef = useRef();
  function onClick() {
    cropperRef.current.toCanvas().toBlob((blob) => {
      console.log(blob);
    });
  }
  return (
    <>
      <plus-center>
        <plus-cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          ref={cropperRef}
        ></plus-cropper>
      </plus-center>
      <br />
      <plus-center>
        <button onclick={onClick}>To Blob</button>
      </plus-center>
    </>
  );
}
export default App;
