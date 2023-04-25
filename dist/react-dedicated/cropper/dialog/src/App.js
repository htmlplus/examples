import { useState } from 'react';
import { Center, Cropper, Dialog } from '@htmlplus/react';
const CropperDialog = () => {
  const [disabled, setDisabled] = useState(true);
  const change = (disabled) => {
    setDisabled(disabled);
  };
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-cropper">Open</Dialog.Toggler>
      </Center>
      <Dialog
        animation="fade"
        connector="dialog-cropper"
        onOpened={() => change(false)}
        onClosed={() => change(true)}
      >
        <Dialog.Content>
          <Dialog.Header>Cropper</Dialog.Header>
          <Dialog.Body>
            <Cropper
              disabled={disabled}
              src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
            ></Cropper>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Toggler>Close</Dialog.Toggler>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
};
export default CropperDialog;
