import '@htmlplus/core/center.js';
import '@htmlplus/core/dialog.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-toggler.js';
import '@htmlplus/core/faker.js';
const DialogSticky = () => {
  return (
    <>
      <plus-center>
        <plus-dialog-toggler connector="dialog-sticky">
          Open
        </plus-dialog-toggler>
      </plus-center>
      <plus-dialog animation="fade" connector="dialog-sticky" full-width sticky>
        <plus-dialog-content>
          <plus-dialog-body>
            <plus-faker></plus-faker>
          </plus-dialog-body>
        </plus-dialog-content>
      </plus-dialog>
    </>
  );
};
export default DialogSticky;
