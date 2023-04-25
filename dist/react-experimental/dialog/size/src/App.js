import { useState } from 'react';
import '@htmlplus/core/dialog.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-footer.js';
import '@htmlplus/core/dialog-header.js';
import '@htmlplus/core/stack.js';
const DialogSize = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('md');
  const hide = () => {
    setOpen(false);
  };
  const show = (size) => {
    setSize(size);
    setOpen(true);
  };
  return (
    <>
      <plus-stack gap="1rem">
        <button onClick={() => show('sm')}>Small dialog</button>
        <button onClick={() => show('lg')}>Large dialog</button>
        <button onClick={() => show('xl')}>Extra large dialog</button>
      </plus-stack>
      <plus-dialog
        animation="fade"
        open={open}
        size={size}
        onplus-close={() => hide()}
      >
        <plus-dialog-content>
          <plus-dialog-header>Dialog Title</plus-dialog-header>
          <plus-dialog-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </plus-dialog-body>
          <plus-dialog-footer>
            <button onClick={() => hide()}>Close</button>
          </plus-dialog-footer>
        </plus-dialog-content>
      </plus-dialog>
    </>
  );
};
export default DialogSize;
