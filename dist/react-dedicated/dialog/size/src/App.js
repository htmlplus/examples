import { useState } from 'react';
import { Dialog, Stack } from '@htmlplus/react';
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
      <Stack gap="1rem">
        <button onClick={() => show('sm')}>Small dialog</button>
        <button onClick={() => show('lg')}>Large dialog</button>
        <button onClick={() => show('xl')}>Extra large dialog</button>
      </Stack>
      <Dialog animation="fade" open={open} size={size} onClose={() => hide()}>
        <Dialog.Content>
          <Dialog.Header>Dialog Title</Dialog.Header>
          <Dialog.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Dialog.Body>
          <Dialog.Footer>
            <button onClick={() => hide()}>Close</button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
};
export default DialogSize;
