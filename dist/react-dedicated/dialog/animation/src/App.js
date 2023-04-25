import { Center, Dialog, Faker } from '@htmlplus/react';
const DialogAnimation = () => {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-animation">Open</Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-animation">
        <Dialog.Content>
          <Dialog.Header>Dialog Title</Dialog.Header>
          <Dialog.Body>
            <Faker></Faker>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Toggler>Close</Dialog.Toggler>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
};
export default DialogAnimation;
