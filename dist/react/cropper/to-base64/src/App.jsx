import { useRef } from 'react';

import '@htmlplus/core/center.js';
import '@htmlplus/core/cropper.js';

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
      <plus-center>
        <plus-cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          ref={cropperRef}
        ></plus-cropper>
      </plus-center>
      <br />
      <plus-center>
        <button onClick={onClick}>To Base64</button>
      </plus-center>
    </>
  );
}
export default App;
