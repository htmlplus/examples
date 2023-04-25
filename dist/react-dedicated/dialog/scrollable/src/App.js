import { Center, Dialog, Faker } from '@htmlplus/react';
const DialogScrollable = () => {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-scrollable">Open</Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-scrollable" scrollable>
        <Dialog.Content>
          <Dialog.Header>Dialog Title</Dialog.Header>
          <Dialog.Body>
            <Faker api="lorem.paragraphs" arguments='[15, "\n\n"]'></Faker>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Toggler>Close</Dialog.Toggler>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
};
export default DialogScrollable;
