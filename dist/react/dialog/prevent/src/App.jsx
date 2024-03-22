import { useEffect, useRef } from 'react';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/dialog-body.js';
import '@htmlplus/ui/dialog-content.js';
import '@htmlplus/ui/dialog-footer.js';
import '@htmlplus/ui/dialog-header.js';
import '@htmlplus/ui/dialog-toggler.js';
import '@htmlplus/ui/dialog.js';
import '@htmlplus/ui/faker.js';

function App() {
  const dialogRef = useRef();
  useEffect(() => {
    if (!dialogRef.current) return;
    function onPlusOpen(event) {
      if (confirm('Are you sure you want to open it?')) return;
      event.preventDefault();
    }
    dialogRef.current.addEventListener('plus-open', onPlusOpen);
    return () => {
      if (!dialogRef.current) return;
      dialogRef.current.removeEventListener('plus-open', onPlusOpen);
    };
  });
  useEffect(() => {
    if (!dialogRef.current) return;
    function onPlusClose(event) {
      if (confirm('Are you sure you want to close it?')) return;
      event.preventDefault();
    }
    dialogRef.current.addEventListener('plus-close', onPlusClose);
    return () => {
      if (!dialogRef.current) return;
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
