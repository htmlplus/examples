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
  const plusFakerRef = useRef();
  useEffect(() => {
    plusFakerRef.current.arguments = [15, '\n\n'];
  }, []);
  return (
    <>
      <plus-center>
        <plus-dialog-toggler connector="dialog-scrollable"> Open </plus-dialog-toggler>
      </plus-center>
      <plus-dialog animation="fade" connector="dialog-scrollable" scrollable>
        <plus-dialog-content>
          <plus-dialog-header> Dialog Title </plus-dialog-header>
          <plus-dialog-body>
            <plus-faker api="lorem.paragraphs" ref={plusFakerRef}></plus-faker>
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
