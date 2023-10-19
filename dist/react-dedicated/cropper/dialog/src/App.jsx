import { useState } from 'react';

import { Center, Cropper, Dialog } from '@htmlplus/react';

function App() {
  const [disabled, setDisabled] = useState(true);
  function onOpened() {
    setDisabled(false);
  }
  function onClosed() {
    setDisabled(true);
  }
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-cropper"> Open </Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-cropper" onOpened={onOpened} onClosed={onClosed}>
        <Dialog.Content>
          <Dialog.Header> Cropper </Dialog.Header>
          <Dialog.Body>
            <Cropper
              disabled={disabled}
              src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
            ></Cropper>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Toggler> Close </Dialog.Toggler>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
}
export default App;
