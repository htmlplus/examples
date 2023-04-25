import { Center, Dialog, Faker } from '@htmlplus/react';
const DialogFullWidth = () => {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-full-width">Open</Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-full-width" fullWidth>
        <Dialog.Content>
          <Dialog.Body>
            <Faker></Faker>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog>
    </>
  );
};
export default DialogFullWidth;
