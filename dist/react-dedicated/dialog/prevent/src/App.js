import { Center, Dialog, Faker } from '@htmlplus/react';
const DialogPrevent = () => {
  const ensure = (type, event) => {
    if (window.confirm(`Are you sure you want to ${type} it?`)) return;
    event.preventDefault();
  };
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-prevent">Open</Dialog.Toggler>
      </Center>
      <Dialog
        animation="fade"
        connector="dialog-prevent"
        onOpen={(event) => ensure('open', event)}
        onClose={(event) => ensure('close', event)}
      >
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
export default DialogPrevent;
