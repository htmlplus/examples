import { useEffect, useRef, useState } from 'react';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/cropper.js';
import '@htmlplus/ui/dialog-body.js';
import '@htmlplus/ui/dialog-content.js';
import '@htmlplus/ui/dialog-footer.js';
import '@htmlplus/ui/dialog-header.js';
import '@htmlplus/ui/dialog-toggler.js';
import '@htmlplus/ui/dialog.js';

function App() {
  const dialogRef = useRef();
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (!dialogRef.current) return;
    function onPlusOpened() {
      setDisabled(false);
    }
    dialogRef.current.addEventListener('plus-opened', onPlusOpened);
    return () => {
      if (!dialogRef.current) return;
      dialogRef.current.removeEventListener('plus-opened', onPlusOpened);
    };
  });
  useEffect(() => {
    if (!dialogRef.current) return;
    function onPlusClosed() {
      setDisabled(true);
    }
    dialogRef.current.addEventListener('plus-closed', onPlusClosed);
    return () => {
      if (!dialogRef.current) return;
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
