import { Center, Dialog, Faker } from '@htmlplus/react';
const DialogSticky = () => {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-sticky">Open</Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-sticky" fullWidth sticky>
        <Dialog.Content>
          <Dialog.Body>
            <Faker></Faker>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog>
    </>
  );
};
export default DialogSticky;
