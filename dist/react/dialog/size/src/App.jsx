import { useRef } from 'react';

import '@htmlplus/ui/dialog-body.js';
import '@htmlplus/ui/dialog-content.js';
import '@htmlplus/ui/dialog-footer.js';
import '@htmlplus/ui/dialog-header.js';
import '@htmlplus/ui/dialog-toggler.js';
import '@htmlplus/ui/dialog.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/stack.js';

function App() {
  const dialogRef = useRef();
  const show = (size) => {
    dialogRef.current.size = size;
    dialogRef.current.open = true;
  };
  return (
    <>
      <plus-stack gap="1rem">
        <button onClick={() => show('sm')}>Small</button>
        <button onClick={() => show('md')}>Medium</button>
        <button onClick={() => show('lg')}>Large</button>
        <button onClick={() => show('xl')}>Extra Large</button>
      </plus-stack>
      <plus-dialog animation connector="dialog-size" ref={dialogRef}>
        <plus-dialog-content>
          <plus-dialog-header>Dialog Title</plus-dialog-header>
          <plus-dialog-body>
            <plus-faker></plus-faker>
          </plus-dialog-body>
          <plus-dialog-footer>
            <plus-dialog-toggler>Close</plus-dialog-toggler>
          </plus-dialog-footer>
        </plus-dialog-content>
      </plus-dialog>
    </>
  );
}
export default App;
