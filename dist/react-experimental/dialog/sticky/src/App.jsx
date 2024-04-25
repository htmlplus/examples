import '@htmlplus/ui/center.js';
import '@htmlplus/ui/dialog-body.js';
import '@htmlplus/ui/dialog-content.js';
import '@htmlplus/ui/dialog-toggler.js';
import '@htmlplus/ui/dialog.js';
import '@htmlplus/ui/faker.js';

function App() {
  return (
    <>
      <plus-center>
        <plus-dialog-toggler connector="dialog-sticky">Open</plus-dialog-toggler>
      </plus-center>
      <plus-dialog animation connector="dialog-sticky" full-width sticky>
        <plus-dialog-content>
          <plus-dialog-body>
            <plus-faker></plus-faker>
          </plus-dialog-body>
        </plus-dialog-content>
      </plus-dialog>
    </>
  );
}
export default App;
