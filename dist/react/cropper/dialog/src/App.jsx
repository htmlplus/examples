import { useEffect, useRef, useState } from 'react';

import '@htmlplus/core/center.js';
import '@htmlplus/core/cropper.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-footer.js';
import '@htmlplus/core/dialog-header.js';
import '@htmlplus/core/dialog-toggler.js';
import '@htmlplus/core/dialog.js';

function App() {
  const dialogRef = useRef();
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    function onPlusOpened() {
      setDisabled(false);
    }
    dialogRef.current.addEventListener('plus-opened', onPlusOpened);
    return () => {
      dialogRef.current.removeEventListener('plus-opened', onPlusOpened);
    };
  });
  useEffect(() => {
    function onPlusClosed() {
      setDisabled(true);
    }
    dialogRef.current.addEventListener('plus-closed', onPlusClosed);
    return () => {
      dialogRef.current.removeEventListener('plus-closed', onPlusClosed);
    };
  });
  return (
    <>
      <plus-center>
        <plus-dialog-toggler connector="dialog-cropper"> Open </plus-dialog-toggler>
      </plus-center>
      <plus-dialog animation="fade" connector="dialog-cropper" ref={dialogRef}>
        <plus-dialog-content>
          <plus-dialog-header> Cropper </plus-dialog-header>
          <plus-dialog-body>
            <plus-cropper
              disabled={disabled}
              src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
            ></plus-cropper>
          </plus-dialog-body>
          <plus-dialog-footer>
            <plus-dialog-toggler> Close </plus-dialog-toggler>
          </plus-dialog-footer>
        </plus-dialog-content>
      </plus-dialog>
    </>
  );
}
export default App;
