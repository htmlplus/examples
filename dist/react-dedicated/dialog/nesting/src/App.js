import { Dialog, Faker, Stack } from '@htmlplus/react';
const DialogNesting = () => {
  return (
    <>
      <Stack gap="1rem">
        <Dialog.Toggler connector="dialog-nesting-1">
          Open Dialog 1
        </Dialog.Toggler>
        <Dialog.Toggler connector="dialog-nesting-2">
          Open Dialog 2
        </Dialog.Toggler>
        <Dialog.Toggler connector="dialog-nesting-3">
          Open Dialog 3
        </Dialog.Toggler>
      </Stack>
      <Dialog animation="fade" connector="dialog-nesting-1" size="xl">
        <Dialog.Content>
          <Dialog.Header>Dialog 1</Dialog.Header>
          <Dialog.Body>
            <Faker></Faker>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Toggler connector="dialog-nesting-2">
              Open Dialog 2
            </Dialog.Toggler>
            <Dialog.Toggler>Close</Dialog.Toggler>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
      <Dialog animation="fade" connector="dialog-nesting-2" size="lg">
        <Dialog.Content>
          <Dialog.Header>Dialog 2</Dialog.Header>
          <Dialog.Body>
            <Faker></Faker>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Toggler connector="dialog-nesting-3">
              Open Dialog 3
            </Dialog.Toggler>
            <Dialog.Toggler>Close</Dialog.Toggler>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
      <Dialog animation="fade" connector="dialog-nesting-3" size="sm">
        <Dialog.Content>
          <Dialog.Header>Dialog 3</Dialog.Header>
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
export default DialogNesting;
