import { Center, Dialog, Faker } from '@htmlplus/react';

function App() {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-persistent"> Open </Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-persistent" persistent>
        <Dialog.Content>
          <Dialog.Header> Dialog Title </Dialog.Header>
          <Dialog.Body>
            <Faker></Faker>
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
