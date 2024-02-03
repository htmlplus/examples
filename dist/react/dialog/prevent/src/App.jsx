import { useEffect, useRef } from 'react';

import '@htmlplus/core/center.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-footer.js';
import '@htmlplus/core/dialog-header.js';
import '@htmlplus/core/dialog-toggler.js';
import '@htmlplus/core/dialog.js';
import '@htmlplus/core/faker.js';

function App() {
  const dialogRef = useRef();
  useEffect(() => {
    function onPlusOpen(event) {
      if (confirm('Are you sure you want to open it?')) return;
      event.preventDefault();
    }
    dialogRef.current.addEventListener('plus-open', onPlusOpen);
    return () => {
      dialogRef.current.removeEventListener('plus-open', onPlusOpen);
    };
  });
  useEffect(() => {
    function onPlusClose(event) {
      if (confirm('Are you sure you want to close it?')) return;
      event.preventDefault();
    }
    dialogRef.current.addEventListener('plus-close', onPlusClose);
    return () => {
      dialogRef.current.removeEventListener('plus-close', onPlusClose);
    };
  });
  return (
    <>
      <plus-center>
        <plus-dialog-toggler connector="dialog-prevent"> Open </plus-dialog-toggler>
      </plus-center>
      <plus-dialog animation="fade" connector="dialog-prevent" ref={dialogRef}>
        <plus-dialog-content>
          <plus-dialog-header> Dialog Title </plus-dialog-header>
          <plus-dialog-body>
            <plus-faker></plus-faker>
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
