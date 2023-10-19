import { Center, Dialog, Faker } from '@htmlplus/react';

function App() {
  function onOpen(event) {
    if (confirm('Are you sure you want to open it?')) return;
    event.preventDefault();
  }
  function onClose(event) {
    if (confirm('Are you sure you want to close it?')) return;
    event.preventDefault();
  }
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-prevent"> Open </Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-prevent" onOpen={onOpen} onClose={onClose}>
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
